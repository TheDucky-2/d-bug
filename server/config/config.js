import dotenv from "dotenv";
dotenv.config({
    path: "./.env"
})

const config = {
    SERVER_PORT: process.env.SERVER_PORT,
    DATABASE_URI: process.env.DATABASE_URI,
    JWT_SECRET:process.env.JWT_SECRET,
    JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN,
    APP_URL:process.env.APP_URL,
    NODE_ENV:process.env.NODE_ENV
}


export default config