import dotenv from "dotenv"
import connectDB from "./Database/dbConnect.js";
import { app } from "./App/app.js";
import { PORT } from "./Constant.js";
import {router} from "./Routes/MainRouter.js";


dotenv.config({
  path:"./.env"
})

app.get("/test" , (req, res)=>{
  res.send(" Your service is working ");
})
app.use("/api", router)

// database connection ......................
connectDB();

app.listen(PORT || 8585 , ()=>{
  console.log(`Your server is running at : http://localhost:${PORT} `);
})

