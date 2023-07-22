import {  Controller,Get,Req,Post} from "@nestjs/common";
import { Request } from "express";
import { of } from 'rxjs';

@Controller('/users')
export class UsersController
{
    @Post('/profile')
    getprofile(@Req() req:Request){
        console.log(req);
        return of( {
            hello:'world',
        });
    }
}
