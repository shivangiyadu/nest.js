import { Module } from "@nestjs/common";
import { user2Controller } from "./user2.controller";
import { User2Service } from "./user2.services";

@Module({
  controllers: [user2Controller],
  providers: [User2Service],
})

export class user2Module {}