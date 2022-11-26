import { httpBatchLink, createTRPCProxyClient } from "@trpc/client";
import type { AppRouter } from "@/server/trpc/routers";

export default defineNuxtPlugin((nuxtApp) => {
  const url = `http://localhost:3004/api/trpc`
  const client = createTRPCProxyClient<AppRouter>({
    links: [
      httpBatchLink({
        /**
         * If you want to use SSR, you need to use the server's full URL
         * @link https://trpc.io/docs/ssr
         **/
        url
      }),
    ],
  });

  return {
    provide: {
      client,
    },
  };
});
