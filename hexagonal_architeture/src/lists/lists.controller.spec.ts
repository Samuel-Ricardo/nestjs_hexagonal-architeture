import { Test, TestingModule } from '@nestjs/testing';
import { ListsController } from './lists.controller';
import { ListsService } from './lists.service';
import { ListGatewayInMemory } from './gateways/list-gateway-in-memory';
import { EventEmitter2 } from '@nestjs/event-emitter';

describe('ListsController', () => {
  let controller: ListsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ListsController],
      providers: [
        ListsService,
        ListGatewayInMemory,
        EventEmitter2,
        {
          provide: 'ListPersistenceGateway',
          useExisting: ListGatewayInMemory,
        },
        {
          provide: 'EventEmitter',
          useExisting: EventEmitter2,
        },
      ],
    }).compile();

    controller = module.get<ListsController>(ListsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
