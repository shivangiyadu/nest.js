import { Controller, Get, Param } from "@nestjs/common";
import { UsersService } from "./user.service";

@Controller("users")
export class UsersController{
    //creating condtructr 
    constructor(private readonly userService:UsersService){}

    @Get("/get")
    getuser(){
       return "hello world" 
    }
    @Get("/a/:id")
    async geta(@Param('id')id:number):Promise<any>{
        return this.userService.geta(id)
    }

}