import { initTRPC } from "@trpc/server";
import { transformer } from "@zbelard/utils/transformer";
import type { Context } from "./context.ts";

export const t = initTRPC.context<Context>().create({
  transformer,
});

export const router = t.router;
