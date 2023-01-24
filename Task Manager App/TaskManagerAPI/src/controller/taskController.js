import { StatusCodes } from "http-status-codes";
import { Task } from "../models/taskModel.js";
// import mongoose from "mongoose";

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
        if(tasks){
            res.status(StatusCodes.OK).json(tasks);
        }else{
            res.status(StatusCodes.NOT_FOUND).json({message:"There are No Tasks "});
        }
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message:'Get Error While Fetching All The Tasks'})
    };
}

export async function fetchCompletedTasks(req,res){
    try {
        const completedTasks =  await Task.find({isCompleted:true});
        if(completedTasks){
            res.status(StatusCodes.OK).json(completedTasks);
        }else{
            res.status(StatusCodes.NOT_FOUND).json({message:"No Completed Tasks "});
        }
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message:'Error while Fetching Completed Tasks '});
    }
}

export async function fetchPendingTask(req,res){
    try {
       const pandingTasks = await Task.find({isCompleted:false});
       if(pandingTasks){
           res.status(StatusCodes.OK).json(pandingTasks);
       }else{
        res.status(StatusCodes.NOT_FOUND).json({message:'There are no padding tasks '});
       }
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message:'Error While Fetching Panding Tasks '});
    }
}

export async function fetchTaskById(req,res){
    try {
       const taskById = await Task.findById(req.params.id);
       if(taskById){
        res.status(StatusCodes.OK).json(taskById);
       }else{
        res.status(StatusCodes.NOT_FOUND).json({message:"Tasks not Found by id "});
       }
    } catch (error) {
        res.status(StatusCodes.OK).json({message:'get Error while fetching tasks by id '});
    }
}

export async function fetchTaskByName(req,res){
    try {
        const taskByName = await Task.find({name:req.params.name});
        if(taskByName){
            res.status(StatusCodes.OK).json(taskByName);
        }else{
            res.status(StatusCodes.NOT_FOUND).json({message:"Task not Found"});
        }
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message:'Error while fetchig task by name '});
    }
}

export async function deleteTask(req,res){
    try {
         await Task.findByIdAndDelete(req.params.id);
         res.status(StatusCodes.NO_CONTENT).json();
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message:'Error while Deleting Task '});
    }
}

export async function markTaskAsCompleted(req,res){
    try {
        await Task.findByIdAndUpdate(req.params.id, {isCompleted: true, completedOn:new Date()});
        res.status(StatusCodes.NO_CONTENT).json();
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message:'Error while marking the task as completed '});
    }
}