import { Body,Controller,Post,Get} from "@nestjs/common";

interface VideoDto{
    Name:string;
    tag:string;
}



@Controller('/user5')
export class user5controller{
    @Post('/video')
    addVideo(@Body('name')requestData:string,){
        return{ Success:true};
    }
}
