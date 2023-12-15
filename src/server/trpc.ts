import { initTRPC } from "@trpc/server";

const trpc_server = initTRPC.create();

export const router = trpc_server.router;
export const publicProcedure = trpc_server.procedure;
