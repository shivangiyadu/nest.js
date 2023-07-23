import { Module } from "@nestjs/common";
import { UsersController } from "./users.controllers";
import { userModule } from "./user/user.module";
import { user1Module } from "./dto/user1/user1.module";
import { user2Module } from "./user2/user2.module";
import { user3Module } from "./dto/user3/user3.module";
import { user4Module } from "./user4/user4.module";

@Module({
  imports:[userModule,user1Module,user2Module,user3Module,user4Module],
  controllers: [UsersController],
 
})
export class AppModule {}