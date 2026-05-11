import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }
  @Get('hello')
  getHello(){
    return{
      message: 'Hello Jai',
    };
  }
  @Get('about')
  project(){
    return{
      project: "first saas project",
    };
  }
  @Get('welcome')
  getWelcome(){
    return this.appService.getWelcome();
  }
  
}
