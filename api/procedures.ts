import { TRPCError } from "@trpc/server";
import { t } from "./trpc.ts";

export const publicProcedure = t.procedure;

export const protectedProcedure = t.procedure.use(
  t.middleware(({ ctx, next }) => {
    if (!ctx.session?.user?.email) {
      throw new TRPCError({ code: "UNAUTHORIZED" });
    }

    // This nested spreading looks awful... I know... but it gets the type-safety job well-done
    return next({
      ctx: {
        ...ctx,
        session: {
          ...ctx.session,
          user: {
            ...ctx.session.user,
            email: ctx.session.user.email,
          },
        },
      },
    });
  }),
);
