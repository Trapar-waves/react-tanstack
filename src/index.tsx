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

const rootElement = document.querySelector("#root");
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        {import.meta.env.DEV
          ? (
              <TanStackDevtools
                plugins={[
                  {
                    defaultOpen: false,
                    name: "TanStack Query",
                    render: <ReactQueryDevtoolsPanel />,
                  },
                  {
                    defaultOpen: false,
                    name: "TanStack Router",
                    render: <TanStackRouterDevtoolsPanel />,
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
