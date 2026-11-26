import { createFileRoute } from "@tanstack/react-router";

import { useLang } from "@/lib/i18n";
import { profile, ui } from "@/lib/profile";

const description = `Email e profili di ${profile.name}.`;

export const Route = createFileRoute("/contatti")({
  head: () => ({
    meta: [
      { title: `Contatti — ${profile.name}` },
      { name: "description", content: description },
      { property: "og:title", content: `Contatti — ${profile.name}` },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Contatti,
});

function Contatti() {
  const { lang } = useLang();
  const rows = [
    { label: "Email", href: `mailto:${profile.email}`, value: profile.email },
    ...profile.links.map((l) => ({ label: l.label, href: l.href, value: l.handle })),
  ];

  return (
    <main className="mx-auto w-full max-w-2xl px-6">
      <section className="pt-16 pb-10 sm:pt-24">
        <p className="label-mono animate-rise">{ui.contact.eyebrow[lang]}</p>
        <h1
          className="animate-rise mt-5 font-display text-5xl tracking-tight sm:text-6xl"
          style={{ animationDelay: "80ms" }}
        >
          {ui.contact.title[lang]}
        </h1>
        <p
          className="animate-rise mt-6 max-w-xl leading-relaxed text-muted-foreground"
          style={{ animationDelay: "160ms" }}
        >
          {ui.contact.intro[lang]}
        </p>
      </section>

      <dl className="animate-rise border-t border-border" style={{ animationDelay: "240ms" }}>
        {rows.map((row) => (
          <div key={row.label} className="grid grid-cols-3 gap-4 border-b border-border py-4">
            <dt className="font-mono text-sm text-muted-foreground">{row.label}</dt>
            <dd className="col-span-2">
              <a
                href={row.href}
                target={row.href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noreferrer"
                className="link-trace"
              >
                {row.value}
              </a>
            </dd>
          </div>
        ))}
      </dl>
    </main>
  );
}
