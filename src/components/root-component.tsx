import { Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import * as React from "react";

export function RootComponent() {
  return (
    <React.Fragment>
      <TanStackRouterDevtools />
      <div>Hello "__root"!</div>
      <Outlet />
    </React.Fragment>
  );
}
