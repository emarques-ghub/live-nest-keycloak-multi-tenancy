//Sequelize vai criar as tabelas conforme as definicoes abaixo automaticamente
import { Model, Column, Table } from 'sequelize-typescript';

@Table({ tableName: 'transactions' })
export class Transaction extends Model {
  @Column
  payment_date: Date;

  @Column
  name: string;

  @Column
  amount: number;

  @Column
  subdomain: string;
}