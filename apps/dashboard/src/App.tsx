import React from "react";
import { CombinedProviders } from "./providers/CombinedProviders.tsx";
import { Home } from "./pages/Home.tsx";

export function App() {
  return (
    <CombinedProviders>
      <Home />
    </CombinedProviders>
  );
}
