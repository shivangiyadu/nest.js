
import {Body, Controller,Delete,Get,Param,Patch,Post,} from "@nestjs/common";


@Controller("user3")
export class user3Controller
{
   @Get("/college")
   getCollege()
   {
     return "Heyyyy! Steve";
   }

   @Post("/college")
   async postCollege(@Body()id:any){
    return id;

   }
  @Get("/:id")
  getid(@Param("id") id:any)  {
    console.log(id);
    return id
  }

@Patch(":id")
changeit(@Param('id') idname:any,@Body() username:any){
    return 

}
@Delete(':id')
  deleteit(@Param('id') idname:any){
    return 
  }

   
   
}


function getlogin(): any {
    throw new Error("Function not implemented.");
}

