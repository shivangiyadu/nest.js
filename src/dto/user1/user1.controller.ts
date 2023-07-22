import { Controller ,Get ,Post ,Delete} from "@nestjs/common";

@Controller("user1")
export class User1Controller
{
  @Get("/name")
  getname()
  {
    return "shivangi";
  }
}
