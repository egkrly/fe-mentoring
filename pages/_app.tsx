import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { AutoTrackingProvider } from "@/provider/AutoTrackingProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <AutoTrackingProvider>
        <Component {...pageProps} />
      </AutoTrackingProvider>
    </ChakraProvider>
  );
}
