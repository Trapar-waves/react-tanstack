import { Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import * as React from "react";

export function RootComponent() {
  return (
    <React.Fragment>
      <header className="border-b border-slate-800 bg-[#070b18]/95 px-4 py-3 text-sm text-slate-300 backdrop-blur">
        <nav className="mx-auto flex max-w-4xl flex-wrap items-center gap-4" aria-label="主导航">
          <Link
            to="/"
            className="rounded px-2 py-1 font-medium text-emerald-300 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
          >
            首页
          </Link>
          <Link
            to="/about"
            className="rounded px-2 py-1 font-medium text-emerald-300 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
          >
            关于
          </Link>
        </nav>
      </header>
      <Outlet />
      {import.meta.env.DEV ? <TanStackRouterDevtools /> : null}
    </React.Fragment>
  );
}
