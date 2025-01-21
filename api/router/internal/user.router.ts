import { router } from "../../trpc.ts";
import { protectedProcedure } from "../../procedures.ts";

export const userRouter = router({
  me: protectedProcedure.query(({ ctx }) => {
    return ctx.repos.user.selectByEmail(ctx.session.user.email);
  }),
});
