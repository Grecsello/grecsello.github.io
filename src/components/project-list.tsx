import { useLang } from "@/lib/i18n";
import { ui, type Project } from "@/lib/profile";

export function ProjectList({ items, delay = 0 }: { items: Project[]; delay?: number }) {
  const { lang } = useLang();

  return (
    <ul className="border-t border-border">
      {items.map((project, i) => (
        <li
          key={project.title.it}
          className="animate-rise grid gap-2 border-b border-border py-8 sm:grid-cols-[5rem_1fr] sm:gap-6"
          style={{ animationDelay: `${delay + i * 80}ms` }}
        >
          <span className={`font-mono text-sm ${project.status === "ongoing" ? "text-copper" : "text-muted-foreground"}`}>
            {project.status === "ongoing" ? ui.projects.ongoing[lang] : project.year}
          </span>
          <div>
            <h3 className="text-lg font-medium">
              {project.href ? (
                <a href={project.href} target="_blank" rel="noreferrer" className="link-trace">
                  {project.title[lang]}
                </a>
              ) : (
                project.title[lang]
              )}
            </h3>
            <p className="mt-2 leading-relaxed text-muted-foreground">
              {project.description[lang]}
            </p>
            <p className="mt-3 font-mono text-xs text-copper">{project.tags.join(" / ")}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
