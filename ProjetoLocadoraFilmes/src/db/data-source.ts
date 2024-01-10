import "reflect-metadata"
import { DataSource } from "typeorm"
import { config, dialect } from "../config/db.config"

const AppDataSource = new DataSource({
    type: dialect,
    host: config.HOST,
    port: config.PORT,
    username: config.USER,
    password: config.PASSWORD,
    database: config.DB,
    entities: [],
    synchronize: true,
    logging: false,
})