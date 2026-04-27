import { TanStackDevtools } from "@tanstack/react-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtoolsPanel } from "@tanstack/react-query-devtools";
import { RouterProvider } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import * as React from "react";
import ReactDOM from "react-dom/client";
import { router } from "./router";
import "./global.css";

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const queryClient = new QueryClient();

const rootEl = document.getElementById("root");
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        {import.meta.env.DEV
          ? (
              <TanStackDevtools
                plugins={[
                  {
                    name: "TanStack Query",
                    render: <ReactQueryDevtoolsPanel />,
                    defaultOpen: false,
                  },
                  {
                    name: "TanStack Router",
                    render: <TanStackRouterDevtoolsPanel />,
                    defaultOpen: false,
                  },
                ]}
              />
            )
          : null}
        <RouterProvider router={router} />
      </QueryClientProvider>
    </React.StrictMode>,
  );
}
