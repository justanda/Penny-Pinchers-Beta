import { DataTypes, Model, Sequelize, Optional } from "sequelize";
interface orderInfo {
  id: number;
  customerId: number;
  itemsId: number;
  shipped: boolean;
  createdAt: Date;
  updatedAt: Date;
}

interface orderInput
  extends Optional<orderInfo, "id" | "createdAt" | "updatedAt"> {}

export class Orders extends Model<orderInfo, orderInput> implements orderInfo {
  public id!: number;
  public customerId!: number;
  public itemsId!: number;
  public shipped!: boolean;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}
export function ordersInit(sequelize: Sequelize): typeof Orders {
  Orders.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      customerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      itemsId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      shipped: {
        type: DataTypes.BOOLEAN,
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
      tableName: "orders",
      sequelize,
    }
  );
  return Orders;
}
