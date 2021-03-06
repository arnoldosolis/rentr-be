import { ApolloServer } from "apollo-server-express";
import { ApolloServerPluginDrainHttpServer, ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import express from "express";
import http from "http";
import { schema } from "./schema";
import { createContext } from "./context";
// import { createClient } from "redis";
import Redis from "ioredis";
import session from "express-session";
import connectRedis from "connect-redis";
import cors from "cors";
import { COOKIE_NAME } from "./variables";

async function startApolloServer() {
  const app = express();
  const RedisStore = connectRedis(session);
  // const redisClient = createClient({ legacyMode: true });
  const redis = new Redis();
  app.use(
    cors({
      origin: "http://localhost:3000",
      credentials: true,
    }),
  );
  // redisClient.connect().catch(console.error);
  app.use(
    session({
      name: COOKIE_NAME,
      // store: new RedisStore({ client: <any>redisClient }),
      store: new RedisStore({ client: redis }),
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 365 * 10, // 10 years
        httpOnly: true,
        sameSite: "lax", //csrf
        secure: false, // cookie only works in https (setting to false lets it work in http)
      },
      saveUninitialized: false, // create session by default (no need to store empty sessions so set to false)
      secret: "keyboard cat",
      resave: false,
    }),
  );
  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    schema: schema,
    context: createContext,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer }), ApolloServerPluginLandingPageGraphQLPlayground()],
  });
  await server.start();
  server.applyMiddleware({
    app,
    path: "/",
    cors: false,
  });
  await new Promise<void>((resolve) => {
    httpServer.listen({ port: 4000 });
    resolve();
  });
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
}

startApolloServer();
