import { Controller, Get } from "@nestjs/common";

@Controller("users")
export class UsersController{
    @Get("/get")
    getuser(){
       return "hello world" 
    }

}