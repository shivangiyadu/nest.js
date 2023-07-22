import {Controller,Get,Post} from "@nestjs/common";


@Controller("user2")
export class user2Controller
{
   @Get("/college")
   getCollege()
   {
     return "Heyyyy! Steve";
   }
   
}
