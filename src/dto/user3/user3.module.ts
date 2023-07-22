import {Module} from "@nestjs/common";
import { user3Controller } from "./user3.controller";

@Module({
    controllers: [user3Controller]
})

export class user3Module {}