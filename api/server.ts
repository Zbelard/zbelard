import { createHTTPServer } from "@trpc/server/adapters/standalone";
import { createContext } from "./context.ts";
import { appRouter } from "./router/mod.ts";
// @ts-types="@types/cors"
import cors from "cors";

const server = createHTTPServer({
  middleware: cors(),
  router: appRouter,
  createContext,
});

const PORT = 2022;

server.listen(PORT, () => {
  console.log(`🚀 Server started on http://localhost:${PORT}`)
});
