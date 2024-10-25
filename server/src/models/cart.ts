import { Model, DataTypes, Optional, Sequelize } from "sequelize";

interface cartInfo {
  id: number;
  productId: number;
  orderId: number;
}

interface cartInput extends Optional<cartInfo, "id"> {}

export class Carts extends Model<cartInfo, cartInput> implements cartInfo {
  public id!: number;
  public productId!: number;
  public orderId!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export function cartsInit(sequelize: Sequelize): typeof Carts {
  Carts.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      orderId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "Carts",
    }
  );
  return Carts;
}