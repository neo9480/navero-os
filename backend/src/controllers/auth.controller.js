import dotenv from "dotenv";
import  prisma  from "../db/prismaClient.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

async function registerUser( req, res ) {
  try {
    
    const { owner_name, company_name, business_email, password, phone, address, role } = req.body;
  
    const isUserAlreadyExists = await prisma.user.findUnique({
      where: { business_email },
    });
    
    if ( isUserAlreadyExists ) {
      return res.status( 400 ).json( {
        message: "user already exists"
      } );
    }
  
    const hashedPassword = await bcrypt.hash( password, 10 );
    
    const user = await prisma.user.create( {
      data: {
        owner_name,
        business_email,
        company_name,
        password: hashedPassword,
        phone,
        address,
        role
      }
    } );
  
    const token = jwt.sign( { id: user.id, role: user.role }, JWT_SECRET, { expiresIn: "7d" } );
  
    return res.status( 200 ).json( {
      message: "user registered successfully",
      token,
      user: {
        id: user.id,
        owner_name: user.owner_name,
        company_name: user.company_name,
        business_email: user.business_email,
        role: user.role
      }
    } );
  
  } catch (err) {
    console.error('failed to register user:', err);
  }
  
}

async function loginUser( req, res ) {
  const { email, password } = req.body;

  const user = await prisma.user.findUnique( { where: { business_email: email } } );
  
  if ( !user ) {
    return res.status( 400 ).json( {
      message: "failed to login: invalid email or password"
    })
  }
  
  const isPasswordValid = await bcrypt.compare( password, user.password );
  
  if ( !isPasswordValid ) {
    return res.status( 400 ).json( {
      message: "failed to login: invalid email or password"
    })
  };

  const token = jwt.sign( {
    id: user._id,
  }, JWT_SECRET)

  res.cookie( 'token', token );
  res.status( 200 ).json( {
    message: "login successfull",
    user: {
      _id: user.id,
      email: user.business_email,
      password: user.password
    }
  })
}

async function logoutUser( req, res ) {
try {
    res.clearCookie( 'token' );
  res.status( 200 ).json( {
    message: "user logged out successfully"
  })
  } catch (err) {
    console.error('failed to logout user:', err);
  }
  
}

export default {
  registerUser,
  loginUser,
  logoutUser
}