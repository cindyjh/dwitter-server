import SQ from 'sequelize'
import { config } from '../config.js'

const { database, user, password, dialect, host, port } = config.db

const dialectOptions = dialect === 'postgres' ?
    {
        ssl: {
            require: true, // heroku 는 DB 연결 시 ssl을 사용해서 연결한다.
            rejectUnauthorized: false, // self-signed sertification 사용이 가능하도록 하기 위해
        }
    }
    :
    null

export const sequelize = new SQ.Sequelize(database, user, password, {
    host,
    port,
    dialect,
    dialectOptions,
    logging: false,
    // logging: (...msg) => console.log(msg), // Displays all log function call parameters
})