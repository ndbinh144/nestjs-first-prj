import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { issueSchema } from './issueSchema';
import { z } from 'zod';

type Issue = z.infer<typeof issueSchema>;

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/products')
  async getProducts(): Promise<Issue[]> {
    return await this.appService.getProducts();
  }
}
