import { Injectable } from '@nestjs/common';
import prisma from 'prisma/client';
import { z } from 'zod';
import { issueSchema } from './issueSchema';

type Issue = z.infer<typeof issueSchema>;

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async getProducts(): Promise<Issue[]> {
    const Issues = await prisma.issue.findMany({});
    return Issues;
  }
}
