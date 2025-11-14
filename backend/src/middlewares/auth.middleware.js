import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
import { prisma } from '../db/prismaClient.js'

dotenv.config();

const JWT_TOKEN = process.env.JWT_TOKEN

async function authUserMiddlware( req, res, next ) {
  const token = req.cookies.token;

  if (!token) {
    return res.status( 401 ).json( {
      message: "access denied: please login first"
    })
  }

 try {
   const decoded = jwt.verify( token, `${ JWT_TOKEN }` );
   const user = await prisma.user.findUnique( decoded.id );
   next();

 } catch (err) {
   console.error('', err);
 }
}