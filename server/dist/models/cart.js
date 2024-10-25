import { Model, DataTypes } from "sequelize";
export class Carts extends Model {
}
export function cartsInit(sequelize) {
    Carts.init({
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
    }, {
        sequelize,
        tableName: "Carts",
    });
    return Carts;
}