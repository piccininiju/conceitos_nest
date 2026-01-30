import { Get, Module } from '@nestjs/common';
import { ConceitosManualController } from './conceitos-manual.controller';

@Module({
  controllers: [ConceitosManualController],
})
export class ConceitosManualModule {
  @Get()
  home(): string {
    return 'exemplo';
  }
}
