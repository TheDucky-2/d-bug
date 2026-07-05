import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient()

export const connectDB =  async () =>{
    try{
        await prisma.$connect();
        console.log("Connected to Database.")

    }catch(error){
        console.log("Error connecting with DB", error)
        await prisma.$disconnect()
    }
}
