import { Model, DataTypes } from "sequelize";
export class Customers extends Model {
}
export function customerInit(sequelize) {
    Customers.init({
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
    }, {
        tableName: "customers",
        sequelize,
    });
    return Customers;
}
