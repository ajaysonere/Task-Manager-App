import {StatusCodes} from "http-status-codes";
import { Task } from "../models/taskModel.js";

export async function saveTask(req,res){
    try {
        const date  = new Date();
        req.body['deadline']=new Date(req.body.deadline);
        const task  = new Task({...req.body , createdOn:date});
        const savedTask =  await task.save();
        res.status(StatusCodes.CREATED).json(savedTask);
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message:'Error While Saving Task '});
        console.log(error);
    }
}

export async function fetchAllTask(req,res){
    try {
        const tasks =   await Task.find();
        res.status(StatusCodes.OK).json(tasks);
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message:'Get Error While Fetching All The Tasks'})
    };
}

export async function fetchCompletedTasks(req,res){
    try {
        const completedTasks =  await Task.find({isCompleted:true});
        res.status(StatusCodes.OK).json(completedTasks);
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message:'Error while Fetching Completed Tasks '});
    }
}