"use client";

import { PrivyProvider } from "@privy-io/react-auth";
import { configureChains } from "wagmi";
import * as chains from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import { PrivyWagmiConnector } from "@privy-io/wagmi-connector";
import { ReactNode } from "react";

const configureChainsConfig = configureChains(
  [chains.polygon, chains.polygonMumbai],
  [publicProvider()]
);

export const Providers = ({ children }: { children: ReactNode }) => (
  <PrivyProvider
    appId={process.env.PRIVY_APP_ID || ''}
    config={{
      embeddedWallets: {
        createOnLogin: "users-without-wallets",
      },
      appearance: {
        theme: "#F9F9F9",
        accentColor: "#929292",
      },
    }}
  >
    <PrivyWagmiConnector wagmiChainsConfig={configureChainsConfig}>
      {children}
    </PrivyWagmiConnector>
  </PrivyProvider>
);
