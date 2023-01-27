import axios from 'axios';
import { TaskUrlPrefix } from '../constants/apiServiceConstent';

export function saveTask(task){
    return  axios.post(TaskUrlPrefix,task)
}

export function getTasks(url){
    return axios.get(`${TaskUrlPrefix}/${url}`);
}

export function completeTask(id){
    return axios.put(`${TaskUrlPrefix}/${id}`);
}

export function removeTask(id){
    return axios.delete(`${TaskUrlPrefix}/${id}`);
}

export function countDocument(){
    return axios.get(`${TaskUrlPrefix}/all/document/count`);
}

export function countCompletedTask(){
    return axios.get(`${TaskUrlPrefix}/all/document/completed`);
}

export function countPendingTask(){
    return axios.get(`${TaskUrlPrefix}/all/document/pending`);
}
