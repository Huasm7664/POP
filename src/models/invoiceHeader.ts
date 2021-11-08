import { DataTypes, DoubleDataType, Model, Optional } from "sequelize";
import sequelize from "../db/dbContext";
import { Customer } from "./cutomer";

interface InvoiceHeaderAttributes{
    id: number;
    customerId: number;
    netTotal: number;
    subTotal: number;
    discount: number;
}

export interface InvoiceCreationHeaderAttributes extends Optional<InvoiceHeaderAttributes, 'id'>{}

export class InvoiceHeader extends  Model<InvoiceHeaderAttributes, InvoiceCreationHeaderAttributes > implements InvoiceHeaderAttributes{
    public id!: number;
    public customerId!: number;
    public netTotal!: number;
    public subTotal!: number;
    public discount!: number;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly deletedAt!: Date;
}

InvoiceHeader.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    customerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    netTotal: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    subTotal: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    discount: {
        type: DataTypes.DOUBLE,
        allowNull: false
    }
}, {
    timestamps: true,
    sequelize: sequelize,
    paranoid: true

    
})

// InvoiceHeader.hasOne(Customer);
// Customer.belongsTo(InvoiceHeader, {
//   foreignKey: 'customerId'
// });