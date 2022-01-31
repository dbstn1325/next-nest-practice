import { Controller, Get, Query, Render } from '@nestjs/common';
import { AppService } from './app.service';


@Controller()
export class AppController {
  constructor(private appService: AppService) {}

  // @Get()
  // @Render('')
  // public app() {
  //   return { props: this.appService.all() }; 
  // }

  @Get('')
  @Render('home')
  public index(@Query('name') name?: string) {    //query안에 'name'이라는 이름으로 객체를 보낸다 ( query: { name: undefined },)
    name = 'yoon';
    return { name };
  }

}
