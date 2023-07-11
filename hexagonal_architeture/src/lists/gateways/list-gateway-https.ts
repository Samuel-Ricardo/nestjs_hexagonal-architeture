import { Inject, Injectable } from '@nestjs/common';
import { ListGatewayInterface } from './list-gateway-interface';
import { HttpService } from '@nestjs/axios';
import { List } from '../entities/list.entity';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class ListGatewayHttp implements ListGatewayInterface {
  constructor(
    @Inject(HttpService)
    private httpService: HttpService,
  ) {}

  async create(list: List): Promise<List> {
    await lastValueFrom(
      this.httpService.post('list', {
        name: list.name,
      }),
    );
    return list;
  }

  async findAll(): Promise<List[]> {
    const { data } = await lastValueFrom(this.httpService.get<any[]>('list'));

    return data.map((d) => new List(d.name, d.id));
  }

  async findById(id: number): Promise<List> {
    const { data } = await lastValueFrom(
      this.httpService.get<any>(`list/${id}`),
    );

    return new List(data.name, data.id);
  }
}
