import {Body, Controller,Get,Param,Post ,Delete} from "@nestjs/common";
import { CreateUserDTO } from "src/Data_Trans_ob";

let USERS=[]

@Controller('/crud')
export class user6controller{

@Post()
adduser(@Body() createUserDTO:CreateUserDTO)
      {
        USERS.push(CreateUserDTO);
        return 'User Added';
      }
@Get()
getUsers()
{
    return USERS;
}
@Get(":id")//route parameters
get_users(@Param("id")id:number){

 return USERS.find((user)=> +user.id===id);
}
@Get(":id")//route parameters
updateUsers(@Param("id")id:number,@Body()updateUserDTO:CreateUserDTO){

const userIdx=USERS.findIndex((user)=>+user.id===id);
if(!userIdx)
{
    return;
}
USERS[userIdx]=updateUserDTO
}

@Delete('id')
DeleteUsers(@Param("id")id:number){
const userIdx=USERS.findIndex((user)=>+user.id===id);
USERS=USERS.filter((user)=>+user.id===id);
}
}










