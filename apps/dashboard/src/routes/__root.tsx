import React from "react";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { CombinedProviders } from "../providers/CombinedProviders.tsx";

export const Route = createRootRoute({
  component: () => (
    <CombinedProviders>
      <Outlet />
      {/* TODO: only show devtools in __DEV__ */}
      <TanStackRouterDevtools position="top-right" />
    </CombinedProviders>
  ),
});
