import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("bye")
  getBye(): string {
    return "bye Najim";
  }

  @Get("Contact")
  getContact(): string {
    return "Contact Najim: 0123456789";
  }

  @Get("ci_cd")
  ciCd(): string {
    return "CI/CD has been implemented successfully!";
  }

  @Get("/all")
  getAll(): string {
    return "Get all api is working!";
  }
}
