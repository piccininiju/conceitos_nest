import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  //@Get()
  getHello(): string {
    return 'tste';
  }

  //@Get('exemplo')
  exemplo() {
    return 'Exemplo de rota';
  }
}
