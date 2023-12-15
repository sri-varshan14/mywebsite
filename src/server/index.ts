import { publicProcedure, router } from "./trpc";

export const appRouter = router({
    sayHello: publicProcedure.query(() => {
        return "Hello World"
    })
})

export type AppRouter = typeof appRouter;
