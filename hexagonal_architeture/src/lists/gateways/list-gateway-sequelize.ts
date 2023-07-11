import { Injectable } from '@nestjs/common';
import { ListGatewayInterface } from './list-gateway-interface';
import { ListModel } from '../entities/list.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class ListGatewaySequelize implements ListGatewayInterface {
  constructor(
    @InjectModel(ListModel)
    private listModel: typeof ListModel,
  ) {}

  async create(list: ListModel): Promise<ListModel> {
    const newList = await this.listModel.create(list);
    list.id = newList.id;
    return list;
  }
}
