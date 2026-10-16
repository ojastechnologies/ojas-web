"use client";
import { IconType } from "react-icons";
import {
  SiDotnet, SiReact, SiBlazor, SiTypescript, SiDocker, SiKubernetes, SiPostgresql,
  SiNextdotjs, SiNodedotjs, SiFlutter, SiRedis, SiGithubactions,
  SiOpenai, SiAnthropic, SiLangchain, SiHuggingface, SiPython, SiFastapi, SiOllama,
} from "react-icons/si";
import { TbBrandAzure, TbBrandReactNative, TbVectorTriangle } from "react-icons/tb";

interface Tech { name: string; Icon: IconType }

// AI tooling leads; the engineering stack follows.
const aiStack: Tech[] = [
  { name: "Azure OpenAI", Icon: SiOpenai },
  { name: "Claude", Icon: SiAnthropic },
  { name: "LangChain", Icon: SiLangchain },
  { name: "Semantic Kernel", Icon: SiDotnet },
  { name: "Azure AI Search", Icon: TbBrandAzure },
  { name: "pgvector", Icon: TbVectorTriangle },
  { name: "Hugging Face", Icon: SiHuggingface },
  { name: "Ollama", Icon: SiOllama },
  { name: "Python", Icon: SiPython },
  { name: "FastAPI", Icon: SiFastapi },
];

const engineeringStack: Tech[] = [
  { name: ".NET", Icon: SiDotnet },
  { name: "Blazor", Icon: SiBlazor },
  { name: ".NET MAUI", Icon: SiDotnet },
  { name: "React", Icon: SiReact },
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "React Native", Icon: TbBrandReactNative },
  { name: "Flutter", Icon: SiFlutter },
  { name: "Node.js", Icon: SiNodedotjs },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "Azure", Icon: TbBrandAzure },
  { name: "PostgreSQL", Icon: SiPostgresql },
  { name: "Redis", Icon: SiRedis },
  { name: "Docker", Icon: SiDocker },
  { name: "Kubernetes", Icon: SiKubernetes },
  { name: "GitHub Actions", Icon: SiGithubactions },
];

function Row({ items, reverse = false, accent }: { items: Tech[]; reverse?: boolean; accent: string }) {
  // Items are duplicated so the -50% translate loops seamlessly.
  const loop = [...items, ...items];
  return (
    <div className="marquee-mask overflow-hidden">
      <div
        className="flex w-max gap-3 animate-marquee hover:[animation-play-state:paused]"
        style={reverse ? { animationDirection: "reverse" } : undefined}
      >
        {loop.map((t, i) => (
          <div
            key={`${t.name}-${i}`}
            aria-hidden={i >= items.length}
            className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/[0.08] bg-white/[0.03] transition-colors duration-300 hover:border-cyan-300/30 hover:bg-white/[0.07]"
          >
            <t.Icon className={`w-4 h-4 ${accent}`} />
            <span className="text-sm font-medium text-white/70 whitespace-nowrap">{t.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function TechBar() {
  return (
    <section className="theme-dark relative py-20 bg-ink-950 border-y border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <p className="text-[11px] font-semibold text-white/40 uppercase tracking-[0.2em]">
          The stack behind our AI and software
        </p>
      </div>
      <div className="space-y-3">
        <Row items={aiStack} accent="text-cyan-300" />
        <Row items={engineeringStack} reverse accent="text-violet-300" />
      </div>
    </section>
  );
}
