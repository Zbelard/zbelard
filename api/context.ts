import { db } from "@zbelard/db";
import { Repos } from "@zbelard/core/repos";
import { getSession } from "next-auth/react";
import type { NodeHTTPCreateContextFnOptions } from "@trpc/server/adapters/node-http";
import type { IncomingMessage, ServerResponse } from "node:http";

export const createContext = async (
  opts: NodeHTTPCreateContextFnOptions<
    IncomingMessage,
    ServerResponse<IncomingMessage>
  >,
) => {
  const session = await getSession({ req: opts.req });

  return {
    session,
    db,
    repos: Repos,
  };
};

export type Context = Awaited<ReturnType<typeof createContext>>;
