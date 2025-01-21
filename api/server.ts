import { createHTTPServer } from "@trpc/server/adapters/standalone";
import { createContext } from "./context.ts";
import { appRouter } from "./router/mod.ts";
// @ts-types="@types/cors"
import cors from "cors";

createHTTPServer({
  middleware: cors(),
  router: appRouter,
  createContext,
}).listen(2022);
