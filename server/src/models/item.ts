import { Model, DataTypes, Optional, Sequelize } from "sequelize";

interface itemInfo {
  id: number;
  productId: number;
  orderId: number;
}

interface itemInput extends Optional<itemInfo, "id"> {}

export class Items extends Model<itemInfo, itemInput> implements itemInfo {
  public id!: number;
  public productId!: number;
  public orderId!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export function itemsInit(sequelize: Sequelize): typeof Items {
  Items.init(
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
      tableName: "items",
    }
  );
  return Items;
}
