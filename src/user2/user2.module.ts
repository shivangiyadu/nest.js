import { Module } from "@nestjs/common";
import { user2Controller } from "./user2.controller";

@Module({
  controllers: [user2Controller],
})

export class user2Module {}