import { router } from "../trpc.ts";
import { userRouter } from "./internal/user.router.ts";

export const appRouter = router({
  user: userRouter,
});

export type AppRouter = typeof appRouter;
