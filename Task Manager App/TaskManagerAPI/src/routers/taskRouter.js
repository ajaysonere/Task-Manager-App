import express from 'express';
import { fetchAllTask, fetchCompletedTasks, saveTask } from '../controller/taskController.js';

const taskRouter = express.Router();

taskRouter.post("/tasks",saveTask);
taskRouter.get("/tasks",fetchAllTask);
taskRouter.get("/tasks/Completed",fetchCompletedTasks);


export default taskRouter;
