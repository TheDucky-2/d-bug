import jwt from "jsonwebtoken";
import config from "../config/config.js"
import { prisma } from "../config/db.js";

const authMiddleware = async (req, res, next) => {

    try{
    const authHeader = req.headers.authorization;

    if(!authHeader || authHeader.startsWith("Bearer ")){
        return res.status(401).json({
            success: false,
            message: "Authorization Required. Please login!"
        })
    }

    const token = req.cookies.token || authHeader.split(" ")[1]

    if(!token){
        return res.status(401).json({
            success:false,
            message: "Unauthorized. Please login!"
        })
    }

    const decoded = jwt.verify(token, config.JWT_SECRET)

    const user = await prisma.user.findUnique({
        where: {
            email: decoded.email
        }
    })

    req.user = user;
    console.log(user)
    next()
    
}catch(error){
    console.log(error)
    return res.status(401).json({
        success: false,
        message: "Could not authenticate successfully!"
    })
}

}

export default authMiddleware