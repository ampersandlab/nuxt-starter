import { httpBatchLink, createTRPCProxyClient } from "@trpc/client";
import type { AppRouter } from "@/server/trpc/routers";

const getBaseUrl = () => {
  if (typeof window !== "undefined") {
    return "";
  } // browser should use relative url
  return `http://localhost:${process.env.PORT ?? 3000}`; // dev SSR should use localhost
};

export default defineNuxtPlugin((nuxtApp) => {
  const url = `${getBaseUrl()}/api/trpc`;
  const client = createTRPCProxyClient<AppRouter>({
    links: [
      httpBatchLink({
        /**
         * If you want to use SSR, you need to use the server's full URL
         * @link https://trpc.io/docs/ssr
         **/
        url,
      }),
    ],
  });

  return {
    provide: {
      client,
    },
  };
});
