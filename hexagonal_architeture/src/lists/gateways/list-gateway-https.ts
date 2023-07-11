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
}
