import { ExpressContext } from "apollo-server-express/dist/ApolloServer";
import { Request, Response } from "express";

export interface Context {
  request: Request;
  response: Response;
}

export async function createContext(request: ExpressContext): Promise<Partial<Context>> {
  return {
    ...request,
    request: request.req,
    response: request.res,
  };
}
