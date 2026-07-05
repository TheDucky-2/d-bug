import express from "express";
import config from "./config/config.js"
import cookieParser from "cookie-parser";
import {connectDB} from "./config/db.js"
import authRouter from "./routes/auth.routes.js";
import cors from "cors";
import userRouter from "./routes/user.routes.js";
import projectRouter from "./routes/project.routes.js"
import orgRouter from "./routes/org.routes.js";
import bugRouter from "./routes/bug.routes.js";
import triageRouter from "./routes/triage.routes.js"
import authMiddleware from "./middlewares/authMiddleware.js";

const app = express();
const SERVER_PORT = config.SERVER_PORT

app.use(cors({
    origin: config.APP_URL,
    credentials:true
}))

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/v1/auth", authRouter)
app.use("/api/v1/user", userRouter)
app.use("/api/v1/projects", projectRouter)
app.use("/api/v1/organizations", orgRouter) 
app.use("/api/v1/bugs", bugRouter)
app.use("/api/v1/projects", triageRouter)

app.get("/", (req, res)=> {

    try{
    res.status(200).json({
        success: true,
        status: "Live!",
        message: "Welcome to D-bug's backend API."
        })

    }catch(error){
        res.status(500).json({
            success:false,
            status: "Offline",
            message: "Something went wrong!",
            error:error 
        })
    }
})

app.listen(SERVER_PORT, async ()=> {
    try{console.log(`Server is available on http://localhost:${SERVER_PORT}`)
    await connectDB()
    }
    catch(error){
        console.error(error)
        process.exit(1)
    }

})