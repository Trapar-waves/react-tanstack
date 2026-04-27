/* eslint-disable react-refresh/only-export-components -- TanStack file route */
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: AboutShowcase,
});

function AboutShowcase() {
  return (
    <div className="min-h-dvh bg-[#0b1021] px-6 py-14 text-slate-100">
      <a
        href="#about-main"
        className="absolute left-4 top-4 z-50 -translate-y-[220%] rounded-md bg-emerald-500 px-3 py-2 text-sm font-semibold text-slate-950 transition focus:translate-y-0 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-emerald-300"
      >
        跳到主要内容
      </a>
      <main id="about-main" className="mx-auto max-w-2xl">
        <h1 className="text-3xl font-semibold text-white">关于本演示</h1>
        <p className="mt-4 leading-relaxed text-slate-400">
          此路由用于验证在 GitHub Pages 子路径下，TanStack Router 的 HTML5 history 与 basepath 是否一致工作（依赖部署后的
          {" "}
          <code className="rounded bg-slate-800 px-1.5 py-0.5 text-emerald-300">404.html</code>
          {" "}
          回退）。首页技术图标说明见
          {" "}
          <a
            href="https://icon-sets.iconify.design/logos/"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-emerald-300 underline decoration-emerald-700 underline-offset-2 hover:text-emerald-200"
          >
            Iconify logos
          </a>
          。
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex min-h-11 items-center rounded-lg border border-slate-600 px-5 py-2.5 text-sm font-medium text-emerald-200 transition hover:border-emerald-500/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
        >
          返回首页
        </Link>
      </main>
    </div>
  );
}
