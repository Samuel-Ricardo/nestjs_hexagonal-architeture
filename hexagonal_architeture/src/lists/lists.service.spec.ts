import { Test, TestingModule } from '@nestjs/testing';
import { ListsService } from './lists.service';
import { ListGatewayInMemory } from './gateways/list-gateway-in-memory';
import { ListCreatedEvent } from './events/list-created.events';

describe('ListsService', () => {
  let service: ListsService;
  let listPersistenceGateway: ListGatewayInMemory;

  const eventEmitterMock = {
    emit: jest.fn(),
  };

  beforeEach(() => {
    listPersistenceGateway = new ListGatewayInMemory();
    service = new ListsService(listPersistenceGateway, eventEmitterMock as any);
  });

  it('Should create a list', async () => {
    const list = await service.create({ name: 'Test List' });

    expect(list.name).toBe('Test List');
    expect(listPersistenceGateway.items).toEqual([list]);

    expect(eventEmitterMock.emit).toHaveBeenCalledTimes(1);
    expect(eventEmitterMock.emit).toHaveBeenCalledWith(
      'list.created',
      new ListCreatedEvent(list),
    );
  });
});
