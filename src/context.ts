import { PrismaClient } from "@prisma/client";
import { ExpressContext } from "apollo-server-express/dist/ApolloServer";
import { Request, Response } from "express";
import { prisma } from "./clients";

export interface Context {
  request: Request;
  response: Response;
  prisma: PrismaClient;
}

export async function createContext(request: ExpressContext): Promise<Partial<Context>> {
  return {
    ...request,
    request: request.req,
    response: request.res,
    prisma: prisma,
  };
}
