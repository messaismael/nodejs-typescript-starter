import * as dotenv from 'dotenv';
dotenv.config();
/**
 * Config file
 */
export const PORT = Number(process.env.PORT) ?? 8080

export const NODE_ENV = process.env.NODE_ENV || 'dev'

export const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1/your_db'
