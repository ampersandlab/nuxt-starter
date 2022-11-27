import { router, publicProcedure } from "../trpc";
import { z } from "zod";
export const userRouter = router({
  list: publicProcedure.query(() => {
    return [];
  }),
  hello: publicProcedure
    .input(
      z.object({
        name: z.string().nullish(),
      })
    )
    .query(({ input }) => {
      return {
        greeting: `hello ${input?.name ?? "world!!"}`,
      };
    }),
});
