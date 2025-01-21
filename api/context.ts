import type { CreateNextContextOptions } from '@trpc/server/adapters/next';
import { db } from "@zbelard/db";
import { Repos } from "@zbelard/core/repos";
import { getSession } from 'next-auth/react';
 
export const createContext = async (opts: CreateNextContextOptions) => {
  const session = await getSession({ req: opts.req });
 
  return {
    session,
    db,
    repos: Repos
  };
};
 
export type Context = Awaited<ReturnType<typeof createContext>>;