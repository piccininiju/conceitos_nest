import { Controller, Get, Module } from '@nestjs/common';
import { ConceitosAutomaticoController } from './conceitos-automatico.controller';

@Controller('conceitos-automatico')
export class ConceitosAutomaticoModule {
  @Get()
  home(): string {
    return 'conceitos-automatico';
  }
}
