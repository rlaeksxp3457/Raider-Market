import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Raider Market API';
  }

  getHealth() {
    return {
      status: 'ok',
      message: 'Backend is running',
      timestamp: new Date().toISOString(),
    };
  }
}
