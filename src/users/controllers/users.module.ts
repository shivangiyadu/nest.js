import { Module } from "@nestjs/common";
import { UsersController } from "src/users.controllers";
@Module(
    {
        
        controllers:[UsersController,],
       
    })

class UsersModule {}