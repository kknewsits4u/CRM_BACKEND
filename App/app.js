import express from "express"
import cors from "cors";
import cookieParser from "cookie-parser"

// import   AdminRouterBackend from "../Routers/AdminRouterBackend.js"

const app = express();

//  cors control 

app.use(cors({
  credentials:true,
  origin:["https://crm-manager.netlify.app", "http://localhost:5173"],
}))



app.use(express.urlencoded({extended:true}))

app.use(express.static("public"))

app.use(express.json())

app.use(cookieParser());


// app.use("/api", AdminRouterBackend)

export { app } ;

