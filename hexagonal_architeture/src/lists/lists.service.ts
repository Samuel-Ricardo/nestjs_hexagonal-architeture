import { Injectable, Inject } from '@nestjs/common';
import { CreateListDto } from './dto/create-list.dto';
import { UpdateListDto } from './dto/update-list.dto';
import { ListGatewayInterface } from './gateways/list-gateway-interface';
import { EventEmitter } from 'stream';
import { List } from './entities/list.entity';
import { ListCreatedEvent } from './events/list-created.events';

@Injectable()
export class ListsService {
  constructor(
    @Inject('ListPersistenceGateway')
    private listPersistenceGateway: ListGatewayInterface, //porta ListGatewaySequelize
    @Inject('EventEmitter')
    private eventEmitter: EventEmitter,
  ) {}

  async create(createListDto: CreateListDto) {
    const list = new List(createListDto.name);
    await this.listPersistenceGateway.create(list);
    this.eventEmitter.emit('list.created', new ListCreatedEvent(list));
    return list;
  }

  async findAll() {
    return this.listPersistenceGateway.findAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} list`;
  }

  update(id: number, updateListDto: UpdateListDto) {
    return `This action updates a #${id} list`;
  }

  remove(id: number) {
    return `This action removes a #${id} list`;
  }
}
