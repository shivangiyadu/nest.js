import { Module } from "@nestjs/common";
import { UsersController } from "./users.controllers";
import { userModule } from "./user/user.module";

@Module({
  imports:[userModule],
  controllers: [UsersController],
 
})
export class AppModule {}