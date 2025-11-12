import pg from 'pg'
import dotenv from 'dotenv'

dotenv.config();

const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_HOST = process.env.DB_HOST;
const DB_PORT = process.env.DB_PORT;
const DB_NAME = process.env.DB_NAME;

const db = new pg.Client({
  user: `${DB_USER}`,
  host: `${DB_HOST}`,
  database: `${DB_NAME}`,
  password: `${ DB_PASSWORD }`,
  port: DB_PORT,
} );

async function connectDB() {
  try {
    await db.connect();
    console.log( 'connected to navero-database' );
  } catch (err) {
    console.error( 'connection to database failed:', err );
    process.exit();
  }
};

export default connectDB;