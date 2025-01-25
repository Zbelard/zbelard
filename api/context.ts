import { db } from "@zbelard/db";
import { Repos } from "@zbelard/core/repos";
// import { getSession } from "next-auth/react";
import type { NodeHTTPCreateContextFnOptions } from "@trpc/server/adapters/node-http";
import type { IncomingMessage, ServerResponse } from "node:http";
import type { Session } from "next-auth";

export const createContext = async (
  _opts: NodeHTTPCreateContextFnOptions<
    IncomingMessage,
    ServerResponse<IncomingMessage>
  >,
) => {
  // const session = await getSession({ req: opts.req });
  const session: Session | null = null;

  return {
    session,
    db,
    repos: Repos,
  };
};

export type Context = Awaited<ReturnType<typeof createContext>>;
