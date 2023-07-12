import { Injectable } from '@nestjs/common';
import { ListGatewayInterface } from './list-gateway-interface';
import { ListModel } from '../entities/list.model';
import { InjectModel } from '@nestjs/sequelize';
import { List } from '../entities/list.entity';

@Injectable()
export class ListGatewaySequelize implements ListGatewayInterface {
  constructor(
    @InjectModel(ListModel)
    private listModel: typeof ListModel,
  ) {}

  async create(list: List): Promise<List> {
    const newList = await this.listModel.create(list);
    list.id = newList.id;
    return list;
  }

  async findAll(): Promise<List[]> {
    const listsModels = await this.listModel.findAll();
    return listsModels.map((list) => new List(list.name, list.id));
  }

  async findById(id: number): Promise<List> {
    const listModel = await this.listModel.findByPk(id);
    if (!listModel) throw new Error('List not found');
    return new List(listModel.name, listModel.id);
  }
}
