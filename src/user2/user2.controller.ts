import {Controller,Get,Param,Patch,Post} from "@nestjs/common";
import { User2Service } from "./user2.services";

@Controller("user2")
export class user2Controller{
  constructor(private readonly user2service:User2Service){}
  @Get("test")
  getstring(){
    return "I am learning nest.js";
  }
  @Get(":id")
  async getid(@Param(":id")id:number): Promise<any>{
    return this.user2service.getid(id);
  }
  @Post("api")

    async createapi(@Param()api:number): Promise<any>{
     return this.user2service.createapi(api);
  }
  @Patch(":id")
     async patch_p(@Param(":id")id:number):Promise<any>{
      return this.user2service.patch_p(id);

     }

}






   

