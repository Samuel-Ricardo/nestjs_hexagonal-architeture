import { Table, Column, Model } from 'sequelize-typescript';

export type ListAtributes = {
  name: string;
};

@Table
export class ListModel extends Model<ListAtributes> {
  @Column
  name: string;
}
