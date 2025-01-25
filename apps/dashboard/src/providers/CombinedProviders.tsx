import React from "react";
import { TrpcProvider } from "./TrpcProvider.tsx";

export function CombinedProviders({ children }: { children: React.ReactNode }) {
  return (
    <TrpcProvider>
      {children}
    </TrpcProvider>
  );
}
