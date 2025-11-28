<<<<<<< HEAD
"use client";
import { cookieStorage, createStorage, http } from "wagmi";
import { createConfig } from "wagmi";
import { injected } from "wagmi";
=======
import { cookieStorage, createStorage, http } from "wagmi";
import { createConfig } from "wagmi";
import { injected } from "wagmi/connectors";
>>>>>>> bad6130af101019355316f82819031bc2578bb17
import { polygonAmoy } from "./chains";

const rpcUrl = polygonAmoy.rpcUrls.default.http[0];

const transports = rpcUrl
  ? {
      [polygonAmoy.id]: http(rpcUrl),
    }
  : {};

export const wagmiConfig = createConfig({
  chains: [polygonAmoy],
  transports,
  ssr: false,
  storage: createStorage({
    storage: cookieStorage,
  }),
  connectors: [
    injected({ shimDisconnect: true }),
  ],
});
<<<<<<< HEAD
=======



>>>>>>> bad6130af101019355316f82819031bc2578bb17
