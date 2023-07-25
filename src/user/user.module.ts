import { Module } from "@nestjs/common";
<<<<<<< HEAD

=======
import { UsersController } from "./user.controller";
>>>>>>> 00db2075da3e3505ef3fed303b3d2292f7b460e8
import { UsersService } from "./user.service";
import { UsersController } from "./user.controller";

@Module({
 controllers:[UsersController],
 providers:[UsersService]
})
export class userModule{}