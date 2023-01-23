import express from "express";
import cors from 'cors';
import { configDb } from "./src/config/dbConfid.js";
// import bp from 'body-parser';
import taskRouter from "./src/routers/taskRouter.js";


const app = express();
app.use(express.json());
app.use(taskRouter);
app.use(cors());
// app.use(bp.json())
// app.use(bp.urlencoded())


app.listen(process.env.PORT,()=>{
    console.log(`server is runnig at http://localhost:${process.env.PORT}`);
    configDb();
});
