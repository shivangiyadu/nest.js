import {Controller,Get,Post,Patch,Body} from "@nestjs/common";


@Controller('tasks')
export class User7Controller {
    constructor(private tasksService: TasksService){}

    @Get()
    getalltasks(){
        return this.tasksService.getalltasks();
    }
    @Post()
    createTask(@Body() createTaskDTO: CreateTaskDto):Task{
              return this.tasksService.createTask(createTaskDTO);
    
    }
