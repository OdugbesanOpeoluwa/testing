import {Sequelize} from sequelize;

const sequelize = new Sequeli(
    process.env.DB_NAME as string,
    process.env.DB_USER as string, 
    process.env.DB_PASS as string,
    {
        host: process.env.DB_HOST,
        dailect: "mysql"
        logging: false,
    }
)
export default sequelize