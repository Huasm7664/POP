import { DataTypes, DoubleDataType, Model, Optional } from "sequelize";
import sequelize from "../db/dbContext";

interface CustomerAttributes{
    id: number;
    customerId: string;
    customerNmae: string;
    address: string;

} 

export interface CustomerCreationAttributes extends Optional<CustomerAttributes, 'id'>{}

export class Customer extends  Model<CustomerAttributes, CustomerCreationAttributes > implements CustomerAttributes{
    public id!: number;
    public customerId!: string;
    public customerNmae!: string;
    public address!: string;


    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly deletedAt!: Date;
}

Customer.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    customerId: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    customerNmae: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false
    },

}, {
    timestamps: true,
    sequelize: sequelize,
    paranoid: true

    
})