import { Injectable } from "@nestjs/common";

@Injectable()
export class UsersService {

    async geta(id:number):Promise<any> {
        return {id:id}
    }

    
}