import { table, Column } from 'sequelize-typescript';

export type ListAtributes = {
  name: string;
};

@table
export class ListModel extends Model<ListAtributes> {
  @Column
  name: string;
}
