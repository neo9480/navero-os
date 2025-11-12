// Server routes
import express from 'express'


const app = express();
app.use(express.json());

app.get( '/', async ( req, res ) => {
  try {
    res.send( "This is navero backend" );
  } catch (err) {
    console.error( 'CANNOT GET /:', err );
  }
  
} );

export default app;