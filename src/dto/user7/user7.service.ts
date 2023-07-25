import { Injectable, Injectable } from "@nestjs/common/decorators/core";
import { createTaskDTO } from "src/Data_Trans_ob/DTO/create-task.dto";


@Injectable()
{
    export class TasksService{
        private tasks:Task[];

        getAllTasks():Task[]{
            return this.tasks;
        }
        createTask(CreateTaskDto:createTaskDTO):Task{
            const task:Task = 
            id:uuid(),
           
        }
    }
}
