import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  exemplo(): string {
    return 'exemplo usa o service';
  }
}
