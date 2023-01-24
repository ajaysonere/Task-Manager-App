import express from 'express';
import { fetchAllTask, fetchCompletedTasks, fetchPendingTask, fetchTaskByName, saveTask, fetchTaskById, deleteTask, markTaskAsCompleted } from '../controller/taskController.js';

const taskRouter = express.Router();

taskRouter.post("/tasks",saveTask);
taskRouter.get("/tasks/all",fetchAllTask);
taskRouter.get("/tasks/completed",fetchCompletedTasks);
taskRouter.get("/tasks/pending",fetchPendingTask);
taskRouter.get("/tasks/task-by-id/:id",fetchTaskById);
taskRouter.get("/tasks/tasks-by-name/:name",fetchTaskByName);
taskRouter.delete("/tasks/:id",deleteTask);
taskRouter.put("/tasks/:id",markTaskAsCompleted);
export default taskRouter;
