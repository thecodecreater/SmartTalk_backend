import express from "express"
import dotenv from "dotenv"
import connectDb from "./config/db.js"
import authRouter from "./routes/auth.routes.js"
import cookieParser from "cookie-parser"
dotenv.config()
import cors from "cors"
import userRouter from "./routes/user.routes.js"
import messageRouter from "./routes/message.routes.js"
import { app, server } from "./socket/socket.js"

const port=process.env.PORT || 5000


app.use(cors({
    origin: [
        "https://smart-talk-frountend-new.vercel.app",
        "https://smarttalk-frountend-new.onrender.com",
        "http://localhost:3000"
    ],
    credentials: true
}))
app.use(express.json())
app.use(cookieParser())
app.use("/api/auth",authRouter)
app.use("/api/user",userRouter)
app.use("/api/message",messageRouter)



server.listen(port, "0.0.0.0", () => {
    connectDb()
    console.log("server started")
})