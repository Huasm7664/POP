import config from "../config/config.json";
import { Dialect,Sequelize } from "sequelize";

const env = process.env.NODE_ENV || "development";
let sequelize : Sequelize;

if (env === "development") {
    sequelize = new Sequelize( config.development.database, config.development.username ,config.development.password,
    {host:config.development.host, dialect:config.development.dialect as Dialect});
} else {
    sequelize = new Sequelize( config.development.database, config.development.username ,config.development.password)
    
}

export default sequelize