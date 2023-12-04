import { z } from 'zod';

export const issueSchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string(),
  state: z.enum(['OPEN', 'IN_PROGRESS', 'CLOSED']),
  created_at: z.date(),
  updated_at: z.date(),
});

export const createIssueSchema = z.object({
  title: z.string().min(1, 'title is required').max(255),
  description: z.string().min(1, 'description is required').max(255),
});
