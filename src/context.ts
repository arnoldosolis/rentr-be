import { PrismaClient } from "@prisma/client";
import { ExpressContext } from "apollo-server-express/dist/ApolloServer";
import { Request, Response } from "express";
import { prisma } from "./clients";
import Redis from "ioredis";

export interface Context {
  req: Request;
  res: Response;
  prisma: PrismaClient;
  redis: Redis;
}

const redisClient = new Redis();

export async function createContext(request: ExpressContext): Promise<Partial<Context>> {
  return {
    ...request,
    req: request.req,
    res: request.res,
    prisma: prisma,
    redis: redisClient,
  };
}
