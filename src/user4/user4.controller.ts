import { Controller ,Get,Post,Body,Param,Put,Req} from "@nestjs/common";

@Controller("user4")
export class user4Controller {
    @Get('/getname')
    user4(){
        return "i am learning nest.js";
    }
     
    @Post('/postname')
      async user4post(@Body()name:string){
       return name;   
        }

     @Get("/:bookid")
       user4name(@Param("bookid")bookid:number){
        return `this is the number ${bookid}`;
       }
      
    @Put("/:bookid")
    update_resource(@Param("bookid") bookid :number){
        return `this will update ${bookid}`;

    }
}

    
    

