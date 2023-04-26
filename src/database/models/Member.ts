import {
  Table,
  Column,
  Model,
  IsEmail,
  IsUUID,
  PrimaryKey,
} from "sequelize-typescript";

type Gender = "male" | "female";

@Table
export default class Member extends Model {
  @IsUUID(4)
  @PrimaryKey
  @Column
  id!: string;

  @Column
  name!: string;
}
