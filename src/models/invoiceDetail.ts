import { DataTypes, DoubleDataType, Model, Optional } from "sequelize";
import sequelize from "../db/dbContext";

interface InvoiceDetailAttributes{
    id: number;
    itemId: number;
    invoiceId: number;
    total: number;
    cost: number;
    rate: number;
    qty:number;
} 

export interface InvoiceCreationDetailAttributes extends Optional<InvoiceDetailAttributes, 'id'>{}

export class InvoiceDetail extends  Model<InvoiceDetailAttributes, InvoiceCreationDetailAttributes > implements InvoiceDetailAttributes{
    public id!: number;
    public itemId!: number;
    public invoiceId!: number;
    public total!: number;
    public cost!: number;
    public rate!: number;
    public qty!: number;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly deletedAt!: Date;
}

InvoiceDetail.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    itemId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    invoiceId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    total: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    cost: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    rate: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    qty: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
}, {
    timestamps: true,
    sequelize: sequelize,
    paranoid: true

    
})