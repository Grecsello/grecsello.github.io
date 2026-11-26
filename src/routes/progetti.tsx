import { createFileRoute } from "@tanstack/react-router";

import { ProjectList } from "@/components/project-list";
import { useLang } from "@/lib/i18n";
import { profile, projects, ui } from "@/lib/profile";

const description = `Progetti di elettronica, sistemi embedded e software di ${profile.name}.`;

export const Route = createFileRoute("/progetti")({
  head: () => ({
    meta: [
      { title: `Progetti — ${profile.name}` },
      { name: "description", content: description },
      { property: "og:title", content: `Progetti — ${profile.name}` },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Progetti,
});

function Progetti() {
  const { lang } = useLang();

  return (
    <main className="mx-auto w-full max-w-2xl px-6">
      <section className="pt-16 pb-10 sm:pt-24">
        <p className="label-mono animate-rise">{ui.projects.eyebrow[lang]}</p>
        <h1
          className="animate-rise mt-5 font-display text-5xl tracking-tight sm:text-6xl"
          style={{ animationDelay: "80ms" }}
        >
          {ui.projects.title[lang]}
        </h1>
      </section>
      <ProjectList items={projects} delay={160} />
    </main>
  );
}
