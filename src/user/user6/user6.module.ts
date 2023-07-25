import {Module } from "@nestjs/common";
import { user6controller } from "./user6.controller";

@Module(
    {
        controllers:[user6controller]
    }
)
export class user6Module {}