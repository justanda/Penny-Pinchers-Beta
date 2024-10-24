import { Model, DataTypes, Optional, Sequelize } from "sequelize";
interface customerInfo {
  id: number;
  username: string;
  name: string;
  email: string;
  phone: number;
  address: string;
  city: string;
  state: string;
  zip: number;
  createdAt: Date;
  updatedAt: Date;
}

interface customerInput extends Optional<customerInfo, "id"> {}

export class Customers
  extends Model<customerInfo, customerInput>
  implements customerInfo
{
  public id!: number;
  public username!: string;
  public name!: string;
  public email!: string;
  public phone!: number;
  public address!: string;
  public city!: string;
  public state!: string;
  public zip!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export function customerInit(sequelize: Sequelize): typeof Customers {
  Customers.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      state: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      zip: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      sequelize,
      tableName: "customers",
    }
  );
  return Customers;
}
