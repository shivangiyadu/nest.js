import { Injectable } from "@nestjs/common";


@Injectable()
export class User2Service{
 patch_p(id: number): any {
   throw new Error("Method not implemented.");
 }
    
 async createapi(api: number):Promise <any> {
 
    return {nub: api}
  }
 async getid(id: number):Promise< any> {
   return {nub: id}
  }




}