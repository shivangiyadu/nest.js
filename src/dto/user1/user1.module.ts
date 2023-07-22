import {Module,Controller} from "@nestjs/common";
import { User1Controller} from "./user1.controller";


@Module({
   
    controllers:[User1Controller]
})
export class user1Module {}
