import { createTRPCReact } from "@trpc/react-query";
import { AppRouter } from "@zbelard/api";

export const trpc = createTRPCReact<AppRouter>();
