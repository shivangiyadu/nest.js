import { Module } from "@nestjs/common";
<<<<<<< HEAD

=======
>>>>>>> 00db2075da3e3505ef3fed303b3d2292f7b460e8
import { userModule } from "./user/user.module";
import { user1Module } from "./dto/user1/user1.module";
import { user2Module } from "./user2/user2.module";
import { user3Module } from "./dto/user3/user3.module";
import { user4Module } from "./user4/user4.module";
import { user5Module } from "./user5/user5.module";
import { user6Module } from "./user/user6/user6.module";
@Module({
<<<<<<< HEAD
  imports:[userModule,user1Module,user2Module,user3Module,user4Module,user5Module,user6Module],


=======
  imports:[userModule,user1Module,user2Module,user3Module,user4Module],
 
>>>>>>> 00db2075da3e3505ef3fed303b3d2292f7b460e8
 
})
export class AppModule {}