import { Module } from '@nestjs/common';
import { ListsService } from './lists.service';
import { ListsController } from './lists.controller';
import { ListGatewayHttp } from './gateways/list-gateway-https';
import { ListGatewaySequelize } from './gateways/list-gateway-sequelize';
import { PublishListCreatedEvent } from './listeners/publish-list-created.listener';
import { CreateListInCrmJob } from './jobs/create-list-in-crm.job';
import { EventEmitter } from 'stream';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { SequelizeModule } from '@nestjs/sequelize';
import { ListModel } from './entities/list.model';
import { HttpModule } from '@nestjs/axios';
import { BullModule } from '@nestjs/bull';
// import { CreateListInCrmListener } from './listeners/create-list-in-crm.listener';

@Module({
  imports: [
    SequelizeModule.forFeature([ListModel]),
    HttpModule.register({
      baseURL: 'http://localhost:8000/',
    }),
    BullModule.registerQueue({
      name: 'default',
      defaultJobOptions: { attempts: 1 },
    }),
  ],
  controllers: [ListsController],
  providers: [
    ListsService,
    ListGatewaySequelize,
    ListGatewayHttp,
    //CreateListInCrmListener,
    PublishListCreatedEvent,
    CreateListInCrmJob,
    {
      provide: 'ListPersistenceGateway',
      useExisting: ListGatewaySequelize,
    },
    {
      provide: 'listIntegrationGateway',
      useExisting: ListGatewayHttp,
    },
    {
      provide: 'EventEmitter',
      useExisting: EventEmitter2,
    },
  ],
})
export class ListsModule {}
