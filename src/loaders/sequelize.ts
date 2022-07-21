import { Sequelize } from 'sequelize-typescript';
import {
	MYSQL_DB,
	MYSQL_HOST,
	MYSQL_PORT,
	MYSQL_PASSWORD,
	MYSQL_USER
} from '../config/environment';

const client = new Sequelize(MYSQL_DB!, MYSQL_USER!, MYSQL_PASSWORD!, {
	logging: false,
	dialect: 'mariadb',
	host: MYSQL_HOST,
	port: +MYSQL_PORT,
});


export default client;
