import { OnQueueFailed, Process, Processor } from '@nestjs/bull';
import { Inject } from '@nestjs/common';
import { ListGatewayInterface } from '../gateways/list-gateway-interface';
import { ListCreatedEvent } from '../events/list-created.events';
import { Job } from 'bull';

@Processor()
export class CreateListInCrmJob {
  constructor(
    @Inject('listIntegrationGateway')
    private listIntegrationGateway: ListGatewayInterface,
  ) {}

  @Process('list.created')
  async handle(job: Job<ListCreatedEvent>) {
    console.log('Processing Job - ', { job });

    const event = job.data;

    await this.listIntegrationGateway.create(event.list);
  }

  @OnQueueFailed({ name: 'list.created' })
  handleError(error: Error) {
    console.log('[ERROR] JOB: Create List In CRM - ', { error });
  }
}
