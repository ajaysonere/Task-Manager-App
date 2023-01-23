import mongoose from "mongoose";
import "dotenv/config";

export async function configDb(){
    try {
        await mongoose.connect(process.env.dbUrl);
        console.log("Database Is Connected ");
    } catch (error) {
        console.log("Error has Occured While DB ");
        console.log(error);
    }
}