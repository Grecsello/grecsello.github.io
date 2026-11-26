import { createFileRoute, Link } from "@tanstack/react-router";

import { ProjectList } from "@/components/project-list";
import { FadeWords } from "@/components/fade-words";
import { useLang } from "@/lib/i18n";
import { profile, projects, ui } from "@/lib/profile";

const title = `${profile.name} — ${profile.role.it}`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: profile.tagline.it },
      { property: "og:title", content: title },
      { property: "og:description", content: profile.tagline.it },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

function Index() {
  const { lang } = useLang();

  return (
    <main className="mx-auto w-full max-w-2xl px-6">
      <section className="pt-16 pb-14 sm:pt-24">
        <p className="label-mono"><FadeWords key={`role-${lang}`} text={profile.role[lang]} delay={100} /></p>
        <h1
          className="mt-5 font-display text-6xl leading-[0.95] tracking-tight sm:text-7xl"
        >
          <FadeWords text={profile.name} delay={220} />
        </h1>
        <p
          className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground"
        >
          <FadeWords key={`bio-${lang}`} text={profile.tagline[lang]} delay={320} />
        </p>
      </section>

      <section className="pb-14">
        <div className="flex items-baseline justify-between pb-4">
          <h2 className="label-mono">{ui.home.recent[lang]}</h2>
          <Link to="/progetti" className="link-trace font-mono text-xs">
            {ui.home.allProjects[lang]} →
          </Link>
        </div>
        <ProjectList items={projects.slice(0, 2)} delay={240} />
      </section>

      <section className="pb-14">
        <h2 className="label-mono">{ui.home.skills[lang]}</h2>
        <dl className="mt-4 divide-y divide-border border-t border-border">
          {profile.skills.map((group) => (
            <div key={group.area.it} className="grid grid-cols-3 gap-4 py-3">
              <dt className="font-mono text-sm text-muted-foreground">{group.area[lang]}</dt>
              <dd className="col-span-2 text-sm">
                {group.items.map((item) => typeof item === "string" ? item : item[lang]).join(" · ")}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section>
        <h2 className="label-mono">{ui.home.elsewhere[lang]}</h2>
        <p className="mt-4 flex flex-wrap gap-x-6 gap-y-2 font-mono text-sm">
          <a href={`mailto:${profile.email}`} className="link-trace">
            Email
          </a>
          {profile.links.map((l) => (
            <a key={l.label} href={l.href} target="_blank" rel="noreferrer" className="link-trace">
              {l.label}
            </a>
          ))}
        </p>
      </section>
    </main>
  );
}
