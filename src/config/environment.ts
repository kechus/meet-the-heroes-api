export const NODE_ENV: NodeEnv = (process.env.NODE_ENV as NodeEnv) || 'local';
export const SERVER_PORT = process.env.SERVER_PORT || 8080;

export const MYSQL_DB = process.env.MYSQL_DB!
export const MYSQL_HOST = process.env.MYSQL_HOST!
export const MYSQL_PORT = process.env.MYSQL_PORT!
export const MYSQL_PASSWORD = process.env.MYSQL_PASSWORD!
export const MYSQL_USER = process.env.MYSQL_USER!
