import { Body, Controller } from '@nestjs/common';
import { ShivangiDto } from './dto/shivangi.dto';

@Controller('shivangi')
export class ShivangiController {
    constructor(){}

 async getdata(@Body()data:ShivangiDto):Promise<any>{
    return {data}
 }
}
