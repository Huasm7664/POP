import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../db/dbContext";

interface ItemAttributes{
    id: number;
    name: string;
    description: string;
}

export interface ItemCreationAttributes  extends Optional<ItemAttributes, 'id'> {}
export interface ItemOutput extends Required<ItemAttributes>{}

export class Item extends Model<ItemAttributes, ItemCreationAttributes > implements ItemAttributes{
    public id!: number;
    public name!: string;
    public description!: string;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly deletedAt!: Date;
}

Item.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false
    }
}, {
    timestamps: true,
    sequelize: sequelize,
    paranoid: true

    
})