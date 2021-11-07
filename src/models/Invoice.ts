import { DataTypes, DoubleDataType, Model, Optional } from "sequelize";
import sequelize from "../db/dbContext";

interface InvoiceHeaderAttributes{
    id: number;
    customerId: string;
    netTotal: number;
    subTotal: number;
    discount: number;
}

interface InvoiceDetailAttributes{
    id: number;
    itemId: string;
    invoiceId: string;
    total: number;
    cost: number;
    rate: number;
    qty:number;
} 

interface CustomerAttributes{
    id: number;
    customerId: string;
    customerNmae: string;
    address: string;

} 


export interface InvoiceCreationHeaderAttributes extends Optional<InvoiceHeaderAttributes, 'id'>{}
export interface InvoiceCreationDetailAttributes extends Optional<InvoiceDetailAttributes, 'id'>{}
export interface CustomerCreationAttributes extends Optional<CustomerAttributes, 'id'>{}

export class InvoiceHeader extends  Model<InvoiceHeaderAttributes, InvoiceCreationHeaderAttributes > implements InvoiceHeaderAttributes{
    public id!: number;
    public customerId!: string;
    public netTotal!: number;
    public subTotal!: number;
    public discount!: number;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly deletedAt!: Date;
}
export class InvoiceDetail extends  Model<InvoiceDetailAttributes, InvoiceCreationDetailAttributes > implements InvoiceDetailAttributes{
    public id!: number;
    public itemId!: string;
    public invoiceId!: string;
    public total!: number;
    public cost!: number;
    public rate!: number;
    public qty!: number;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly deletedAt!: Date;
}

export class Customer extends  Model<CustomerAttributes, CustomerCreationAttributes > implements CustomerAttributes{
    public id!: number;
    public customerId!: string;
    public customerNmae!: string;
    public address!: string;


    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly deletedAt!: Date;
}
InvoiceHeader.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    customerId: {
        type: DataTypes.STRING,
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

InvoiceDetail.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    itemId: {
        type: DataTypes.STRING,
        allowNull: false
    },
    invoiceId: {
        type: DataTypes.STRING,
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

// 1:M
//Customer.hasMany(InvoiceHeader, { foreignKey: 'customerId' });
//InvoiceHeader.belongsTo(Customer, { foreignKey: 'customerId' });
