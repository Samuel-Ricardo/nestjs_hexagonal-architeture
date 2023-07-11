import { Injectable, Inject } from '@nestjs/common';
import { ListGatewayInterface } from '../gateways/list-gateway-interface';
import { OnEvent } from '@nestjs/event-emitter';
import { ListCreatedEvent } from '../events/list-created.events';

@Injectable()
export class CreateListInCrmListener {
  constructor(
    @Inject('listIntegrationGateway')
    private listIntegrationGateway: ListGatewayInterface,
  ) {}

  @OnEvent('list.created')
  async handle(event: ListCreatedEvent) {
    console.log('Listen to Job - ', { event });
    this.listIntegrationGateway.create(event.list);
  }
}
