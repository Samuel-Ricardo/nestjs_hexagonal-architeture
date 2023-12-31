import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ListsModule } from './lists/lists.module';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { SequelizeModule } from '@nestjs/sequelize';
import { BullModule } from '@nestjs/bull';
import { ListModel } from './lists/entities/list.model';

@Module({
  imports: [
    ListsModule,
    EventEmitterModule.forRoot(),
    SequelizeModule.forRoot({
      dialect: 'sqlite',
      host: ':memory:',
      autoLoadModels: true,
      models: [ListModel],
    }),
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 6379,
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
