import { Model, DataTypes } from "sequelize";
export class Items extends Model {
}
export function itemsInit(sequelize) {
    Items.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        productId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        orderId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    }, {
        tableName: "items",
        sequelize,
    });
    return Items;
}
