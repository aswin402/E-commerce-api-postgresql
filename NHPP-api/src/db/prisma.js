import 'dotenv/config';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({
  log: ["query", "info", "warn", "error"], // optional: helpful logs
});

export default prisma;
