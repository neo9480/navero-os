import dotenv from "dotenv";
import prisma from "../db/prismaClient.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import userService from "../services/user.service.js";

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

async function registerUser( req, res ) {
  try {
    
    const { owner_name, company_name, business_email, password, phone, address, role } = req.body;
    
    const isUserAlreadyExists = await userService.findUserByEmail(business_email);
    
    if ( isUserAlreadyExists ) {
      return res.status( 400 ).json( {
        message: "user already exists"
      } );
    }
    
    const user = await userService.createUser(
      owner_name,
      company_name,
      business_email,
      password,
      phone,
      address,
      role);
    
    const token = jwt.sign( { id: user.id, role: user.role }, JWT_SECRET, { expiresIn: "7d" } );

    res.cookie( "token", token );
    return res.status( 200 ).json( {
      message: "user registered successfully"
    } );
    
  } catch (err) {
    console.error('failed to register user:', err);
  }
  
}

async function loginUser( req, res ) {
  const { business_email, password } = req.body;

  const user = await userService.findUserByEmail( business_email );
  
  if ( !user ) {
    return res.status( 400 ).json( {
      message: "failed to login: invalid email or password"
    })
  }
  const hashedPassword = user.password;
  const isPasswordValid = await userService.verifyPassword( password, hashedPassword );
  
  if ( !isPasswordValid ) {
    return res.status( 400 ).json( {
      message: "failed to login: invalid email or password"
    })
  };

  const token = jwt.sign(
    {
      id: user.id,
    },
    JWT_SECRET,
    { expiresIn: "7d" },
  );

  res.cookie( 'token', token );
  res.status( 200 ).json( {
    message: "login successfull"
  } )
  
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

async function getUserProfile( req, res ) {
  try {
    const userId = req.user.id;

    const user = await userService.findUserById( userId );
    
    res.status(200).json({
      message: "fetched user profile successfully",
      user
    });

  } catch (err) {
    console.error('failed to fetch user profile:', err);
  }
}

async function updateUserProfile( req, res ) {
  try {
    const userId = req.user.id;
    const { owner_name, company_name, phone, address } = req.body;
  
    const updatedUser = await userService.updateUser(
      userId,
      owner_name,
      company_name,
      phone,
      address,
    );
  
    res.status( 200 ).json( {
      message: "user updated successfully",
      user: updatedUser
    } );

  } catch (err) {
    console.error('failed to update user:', err);
  }
}

async function deleteUser( req, res ) {
  try {
    const userId = req.user.id;
  
    await prisma.user.delete( {
      where: {id: userId}
    } )
    
    res.clearCookie( 'token' );
    
    return res.status( 200 ).json( {
      message: "user deleted successfully"
    } );
  
  } catch (err) {
    console.error('failed to delete user:', err);
  }

}

export default {
  registerUser,
  loginUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  deleteUser
}