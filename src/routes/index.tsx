/* eslint-disable react-refresh/only-export-components -- TanStack file route */
import { useQuery } from "@tanstack/react-query";
import { createFileRoute, Link } from "@tanstack/react-router";

const HOMEPAGE = "https://github.com/Trapar-waves/react-tanstack";
const LOGOS_SET_URL = "https://icon-sets.iconify.design/logos/";
const SIMPLE_ICONS_TANSTACK_URL = "https://icon-sets.iconify.design/simple-icons/tanstack/";

interface TechItem {
  id: string;
  label: string;
  hint: string;
  iconClass: string;
}

const techStack: TechItem[] = [
  { id: "react", label: "React 19", hint: "组件驱动开发", iconClass: "icon-[logos--react]" },
  { id: "tanstack", label: "TanStack Query / Router", hint: "服务端状态与类型安全路由；图标见 Simple Icons", iconClass: "icon-[simple-icons--tanstack]" },
  { id: "ts", label: "TypeScript", hint: "全栈类型约束", iconClass: "icon-[logos--typescript-icon]" },
  { id: "tailwind", label: "Tailwind CSS 4", hint: "工具类样式", iconClass: "icon-[logos--tailwindcss-icon]" },
  { id: "rsbuild", label: "Rsbuild", hint: "@rsbuild/core · @rsbuild/plugin-react", iconClass: "icon-[logos--webpack]" },
  { id: "eslint", label: "ESLint", hint: "@antfu/eslint-config", iconClass: "icon-[logos--eslint]" },
  { id: "iconify", label: "Iconify", hint: "@iconify/json · @iconify/tailwind4（含 logos）", iconClass: "icon-[logos--npm-icon]" },
  { id: "pnpm", label: "pnpm", hint: "包管理与 CI", iconClass: "icon-[logos--pnpm]" },
  { id: "node", label: "Node.js", hint: "本地开发与构建", iconClass: "icon-[logos--nodejs-icon]" },
  { id: "github", label: "GitHub Actions", hint: "Release 与 Pages", iconClass: "icon-[logos--github-icon]" },
];

const readmeFeatures: string[] = [
  "React 19 组件化架构。",
  "TanStack Query：缓存、后台刷新与请求去重。",
  "TanStack Router：类型安全路由与嵌套路由。",
  "Tailwind CSS 工具类样式。",
  "TypeScript 全仓库覆盖。",
  "Rsbuild 分包与开发体验优化。",
  "GitHub Actions 工作流就绪。",
  "README 中预留多语言结构，可按业务落地 i18n。",
];

const readmeTechNote = "首页下方保留 JSONPlaceholder 远程请求演示；生产环境不打包 TanStack Devtools 浮动面板。";

export const Route = createFileRoute("/")({
  component: HomeShowcase,
});

function HomeShowcase() {
  const q = useQuery({
    queryKey: ["trapar-demo"],
    queryFn: async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
      if (!res.ok) {
        throw new Error("demo fetch failed");
      }
      return res.json() as Promise<{ title: string; completed: boolean }>;
    },
  });

  return (
    <div className="min-h-dvh bg-[#0b1021] px-6 py-14 text-slate-100">
      <a
        href="#main"
        className="absolute left-4 top-4 z-50 -translate-y-[220%] rounded-md bg-emerald-500 px-3 py-2 text-sm font-semibold text-slate-950 transition focus:translate-y-0 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-emerald-300"
      >
        跳到主要内容
      </a>
      <main id="main" className="mx-auto max-w-4xl">
        <p className="font-mono text-xs uppercase tracking-[0.28em] text-emerald-400/90">
          react-tanstack
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Router + Query 与 README 对齐的模板展示
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-400">
          深色工程风布局；技术标识以 Iconify
          {" "}
          <a
            href={LOGOS_SET_URL}
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-emerald-300 underline decoration-emerald-600/60 underline-offset-2 hover:text-emerald-200"
          >
            logos
          </a>
          {" "}
          为主；TanStack 使用
          {" "}
          <a
            href={SIMPLE_ICONS_TANSTACK_URL}
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-emerald-300 underline decoration-emerald-600/60 underline-offset-2 hover:text-emerald-200"
          >
            Simple Icons · tanstack
          </a>
          。
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={HOMEPAGE}
            className="inline-flex min-h-11 items-center justify-center rounded-lg bg-emerald-400 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-200"
          >
            查看模板仓库
          </a>
          <Link
            to="/about"
            className="inline-flex min-h-11 items-center justify-center rounded-lg border border-slate-600 px-5 py-2.5 text-sm font-medium text-slate-100 transition hover:border-emerald-500/60 hover:text-emerald-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
          >
            进入 /about 路由
          </Link>
          <span className="icon-[logos--react] text-3xl text-sky-400" aria-hidden />
          <span className="icon-[simple-icons--tanstack] text-3xl text-emerald-400" aria-hidden />
          <span className="icon-[logos--tailwindcss-icon] text-3xl text-cyan-400" aria-hidden />
        </div>

        <h2 className="mt-12 text-xl font-semibold text-white">技术栈一览</h2>
        <ul className="mt-4 grid list-none grid-cols-1 gap-3 p-0 sm:grid-cols-2 lg:grid-cols-3">
          {techStack.map(item => (
            <li
              key={item.id}
              className="flex gap-3 rounded-xl border border-slate-800 bg-slate-900/70 p-4"
            >
              <div
                className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-slate-700 bg-slate-800/80"
                aria-hidden
              >
                <span className={`${item.iconClass} text-2xl`} />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white">{item.label}</h3>
                <p className="mt-1 text-xs leading-snug text-slate-400">{item.hint}</p>
              </div>
            </li>
          ))}
        </ul>

        <h2 className="mt-10 text-xl font-semibold text-white">README 特性摘要</h2>
        <ul className="mt-3 max-w-3xl list-disc space-y-2 pl-5 text-sm text-slate-300">
          {readmeFeatures.map(line => (
            <li key={line}>{line}</li>
          ))}
        </ul>
        <p className="mt-3 max-w-3xl text-xs italic text-slate-500">{readmeTechNote}</p>

        <section
          className="mt-8 rounded-xl border border-slate-800 bg-slate-900/40 p-5"
          aria-labelledby="a11y-tech"
        >
          <h2 id="a11y-tech" className="text-sm font-semibold text-emerald-200">
            图标与可访问性
          </h2>
          <p className="mt-2 max-w-3xl text-xs leading-relaxed text-slate-400">
            装饰性 logos / Simple Icons 矢量图标配合
            <span className="text-slate-200"> aria-hidden</span>
            ；主按钮与次要链接满足约 44px 触控高度与可见焦点样式。
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <span className="icon-[simple-icons--tanstack] text-2xl text-emerald-400" aria-hidden />
            <span className="icon-[logos--eslint] text-2xl text-violet-400" aria-hidden />
            <span className="icon-[logos--github-icon] text-2xl text-slate-300" aria-hidden />
          </div>
        </section>

        <section
          className="mt-10 rounded-xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-sm"
          aria-labelledby="query-heading"
        >
          <h2 id="query-heading" className="text-lg font-medium text-white">
            TanStack Query 占位数据
          </h2>
          {q.isPending && <p className="mt-3 text-slate-400">加载中…</p>}
          {q.isError && (
            <p className="mt-3 text-rose-300" role="alert">
              演示接口不可用，请稍后重试。
            </p>
          )}
          {q.data && (
            <p className="mt-3 text-slate-300">
              标题：
              <span className="text-emerald-300">{q.data.title}</span>
              {" · "}
              完成：
              <span className="text-slate-200">{q.data.completed ? "是" : "否"}</span>
            </p>
          )}
        </section>
      </main>
    </div>
  );
}
