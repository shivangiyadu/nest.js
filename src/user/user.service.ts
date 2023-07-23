import { Injectable } from "@nestjs/common";

@Injectable()
export class UsersService {

    async geta(id:number):Promise<any> {
        return {id:id}
    }
     async createid(create:string):Promise<any> {
        return {hello:create}
     }
    
}