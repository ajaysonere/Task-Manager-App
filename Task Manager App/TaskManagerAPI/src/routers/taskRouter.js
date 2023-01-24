import express from 'express';
import { fetchAllTask, fetchCompletedTasks, fetchPandingTask, fetchTaskByName, saveTask, fetchTaskById, deleteTask, markTaskAsCompleted } from '../controller/taskController.js';

const taskRouter = express.Router();

taskRouter.post("/tasks",saveTask);
taskRouter.get("/tasks",fetchAllTask);
taskRouter.get("/tasks/completed-tasks",fetchCompletedTasks);
taskRouter.get("/tasks/panding-tasks",fetchPandingTask);
taskRouter.get("/tasks/task-by-id/:id",fetchTaskById);
taskRouter.get("/tasks/tasks-by-name/:name",fetchTaskByName);
taskRouter.delete("/tasks/:id",deleteTask);
taskRouter.put("/tasks/mark-completed/:id",markTaskAsCompleted);
export default taskRouter;
