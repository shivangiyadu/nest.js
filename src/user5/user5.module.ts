import {Module} from "@nestjs/common";
import { user5controller } from "./user5.controllers";


@Module(
    {
        controllers:[user5controller]
       
    }
)
export class user5Module {}