import { Inject, Injectable } from '@nestjs/common';
import { ListGatewayInterface } from './list-gateway-interface';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class ListGatewayHttp implements ListGatewayInterface {
  constructor(
    @Inject(HttpService)
    private httpService: HttpService,
  ) {}
}
