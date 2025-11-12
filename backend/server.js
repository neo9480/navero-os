// Start server
import app from './src/app.js'
import dotenv from 'dotenv'
import connectDB from './src/db/db.js';

dotenv.config();
const PORT = process.env.PORT;

async function startServer() {
  try {
    await connectDB();
    app.listen( PORT, () => {
      console.log( `server is running on http://localhost:${PORT}` );
    } );
  } catch (err) {
    console.error( 'failed to start server', err );
  }
  
};

startServer();

