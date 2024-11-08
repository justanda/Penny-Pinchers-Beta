import { DataTypes, Sequelize, Model, Optional } from "sequelize";

interface productInfo {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  sku: string;
  createdAt: Date;
  updatedAt: Date;
}

interface createProduct
  extends Optional<productInfo, "id" | "createdAt" | "updatedAt"> {}

class product extends Model<productInfo, createProduct> implements productInfo {
  public id!: number;
  public title!: string;
  public price!: number;
  public description!: string;
  public category!: string;
  public image!: string;
  public sku!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

function initProduct(sequelize: Sequelize): typeof product {
  product.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      sku: {
        type: DataTypes.STRING,
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
      tableName: "products",
      sequelize,
    }
  );
  return product;
}

export { product, initProduct };
