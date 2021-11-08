import { DataTypes, DoubleDataType, Model, Optional } from "sequelize";
import sequelize from "../db/dbContext";
import { InvoiceHeader } from "./invoiceHeader";

interface CustomerAttributes{
    id: number;
    customerNmae: string;
    address: string;

} 

export interface CustomerCreationAttributes extends Optional<CustomerAttributes, 'id'>{}

export class Customer extends  Model<CustomerAttributes, CustomerCreationAttributes > implements CustomerAttributes{
    public id!: number;
    public customerNmae!: string;
    public address!: string;


    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly deletedAt!: Date;
}

Customer.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
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

Customer.hasMany(InvoiceHeader);
InvoiceHeader.belongsTo(Customer, {
  foreignKey: 'id'
});