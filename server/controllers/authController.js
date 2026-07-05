import {prisma} from "../config/db.js"
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import config from "../config/config.js"

export const signUp = async (req, res) => {

    const {firstName, lastName, email, password} = req.body;

    const existingUser = await prisma.user.findUnique({
        where:
        {
            email
        }
    })

    if(existingUser){
        return res.status(409).json({
            message: "User already registered!"
        })
    }

    try {
    // hashing the password 

    const salt = await bcrypt.genSalt(10)

    const passwordHash = await bcrypt.hash(password, salt)

    //creating a new user

    const user = await prisma.user.create({
        data: {
            firstName, 
            lastName, 
            email,
            passwordHash
        }}

    )

    // generating a JWT

    const payload = {
        userId: user.id,
        email: user.email
    }

    const token = jwt.sign(payload, config.JWT_SECRET, {expiresIn:config.JWT_EXPIRES_IN})

    res.cookie("token", token,
        {
            httpOnly:true,
            secure: config.NODE_ENV === "production",
            sameSite: "lax",
            maxAge: 7 * 24 * 60 * 60 * 1000
        }
    )

    res.status(201).json({
        message: "User created successfully!",
        user: {
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            role: user.role
        }
    })

    
    
    }catch(error){
        console.error(error)
        return res.status(500).json({
            message: "Unable to register",
        }
        )
    }

}

export const signIn = async (req, res) => {

    const {email, password} = req.body;

    try{    
        const user = await prisma.user.findUnique({
        where:{
            email
        }
    })

    if(!user){
        return res.status(401).json({
            success: false,
            message: "Invalid credentials"
        })
    }

    const passwordMatch = await bcrypt.compare(password, user.passwordHash)

    if(!passwordMatch){
        return res.status(401).json({
            success: false,
            message: "Invalid credentials"
        })
    }

    const token = jwt.sign({
        id: user.id,
        email: user.email
    }, config.JWT_SECRET, {expiresIn:config.JWT_EXPIRES_IN})

    res.cookie("token", token, {
        httpOnly: true,
        secure: config.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 7* 24 * 60 * 60 * 1000
    })

    res.json({
        success:true,
        message: "Logged in successfully!"
    })

}catch(error){
    console.error(error)
}

}

export const signOut = () => {

}

export const resetPassword = () => {
    
}

// GET /users/me
export const getCurrentUser = async (req, res) => {

    try{
        const currentUser = await prisma.user.findUnique({
            where:{id: req.user.id}
        }) 

       if(!currentUser){
        return res.status(404).json({
            success: false,
            message: "User not found"
        })
       }

       res.json(currentUser)

    }catch(error){

    console.error(error)
    return res.status(404).json({
        success: false,
        message: "User not found"
    })
    }

}