import * as dotenv from 'dotenv';
dotenv.config();
/**
 * Config file
 */
export const PORT = Number(process.env.PORT) ?? 8080

export const NODE_ENV = process.env.NODE_ENV || 'dev'

