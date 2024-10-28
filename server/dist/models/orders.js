import { DataTypes, Model } from "sequelize";
export class Orders extends Model {
}
export function ordersInit(sequelize) {
    Orders.init({
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
    }, {
        tableName: "orders",
        sequelize,
    });
    return Orders;
}
