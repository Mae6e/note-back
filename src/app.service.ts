import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getWelcome(): { [key: string]: string } {
    return { 'welcome to': 'note app v1' };
  }
}
