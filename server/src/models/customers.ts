import { Model, DataTypes, Optional, Sequelize } from "sequelize";
import bcrypt from "bcrypt";

interface customerInfo {
  id: number;
  username: string;
  password: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zip: number;
  createdAt: Date;
  updatedAt: Date;
}

interface customerInput
  extends Optional<
    customerInfo,
    "id" | "password" | "createdAt" | "updatedAt"
  > {}

export class Customers
  extends Model<customerInfo, customerInput>
  implements customerInfo
{
  public id!: number;
  public username!: string;
  public password!: string;
  public name!: string;
  public email!: string;
  public phone!: string;
  public address!: string;
  public city!: string;
  public state!: string;
  public zip!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  public async setPassword(password: string) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(password, saltRounds);
  }
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
      password: {
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
        type: DataTypes.STRING,
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
      tableName: "customers",
      sequelize,
      hooks: {
        beforeCreate: async (user: Customers) => {
          await user.setPassword(user.password);
        },
        beforeUpdate: async (user: Customers) => {
          if (user.changed("password")) {
            await user.setPassword(user.password);
          }
        },
      },
    }
  );
  return Customers;
}
