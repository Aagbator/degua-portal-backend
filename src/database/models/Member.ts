import { Table, Column, Model, IsEmail } from "sequelize-typescript";

type Gender = "male" | "female";

@Table
export default class Member extends Model {
  @Column
  name!: string;
}
