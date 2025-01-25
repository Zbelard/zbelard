import { publicProcedure } from "../procedures.ts";
import { router } from "../trpc.ts";
import { userRouter } from "./internal/user.router.ts";

export const appRouter = router({
  health: publicProcedure.query(() => "OK"),
  user: userRouter,
});

export type AppRouter = typeof appRouter;
