import { Module } from "@nestjs/common";
import { UsersController } from "src/users.controllers";
import { UsersService } from "./user.service";

@Module({
 controllers:[UsersController],
 providers:[UsersService]
})
export class userModule{}