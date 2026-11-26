import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useLang, type Lang } from "@/lib/i18n";
import { profile, ui } from "@/lib/profile";

const nav = [
  { to: "/", label: ui.nav.home },
  { to: "/progetti", label: ui.nav.projects },
  { to: "/contatti", label: ui.nav.contact },
] as const;

const langs: Lang[] = ["it", "en"];

export function SiteHeader() {
  const { lang, setLang } = useLang();
  const [isDark, setIsDark] = useState(false);
  const manualTheme = useRef(false);

  useEffect(() => {
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");
    let saved: string | null = null;
    try {
      saved = localStorage.getItem("site-theme");
    } catch {
      // Fall back to the system when browser storage is unavailable.
    }
    manualTheme.current = saved === "dark" || saved === "light";
    setIsDark(manualTheme.current ? saved === "dark" : systemTheme.matches);
    function followSystem(event: MediaQueryListEvent) {
      if (!manualTheme.current) setIsDark(event.matches);
    }
    systemTheme.addEventListener("change", followSystem);
    return () => systemTheme.removeEventListener("change", followSystem);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  const themeLabel = (isDark ? ui.nav.lightTheme : ui.nav.darkTheme)[lang];

  function toggleTheme() {
    const next = !isDark;
    manualTheme.current = true;
    setIsDark(next);
    try {
      localStorage.setItem("site-theme", next ? "dark" : "light");
    } catch {
      // The toggle still works when browser storage is unavailable.
    }
  }

  return (
    <header className="mx-auto flex w-full max-w-2xl flex-wrap items-center justify-between gap-4 px-6 pt-10 pb-6">
      <Link to="/" className="font-mono text-sm tracking-tight text-foreground">
        {profile.name.toLowerCase().replace(" ", ".")}
      </Link>
      <div className="flex w-full items-center justify-between gap-3 font-mono text-sm sm:w-auto sm:gap-4">
        <nav className="flex gap-4">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: true }}
              className="text-muted-foreground transition-colors hover:text-foreground data-[status=active]:text-copper"
            >
              {item.label[lang]}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-1 text-xs" role="group" aria-label="Language">
          {langs.map((l, i) => (
            <span key={l} className="flex items-center gap-1">
              {i > 0 && <span className="text-border">/</span>}
              <Button
                type="button"
                variant="ghost"
                onClick={() => setLang(l)}
                aria-pressed={lang === l}
                className="h-8 px-1 font-mono text-xs uppercase text-muted-foreground hover:text-foreground aria-pressed:text-foreground"
              >
                {l}
              </Button>
            </span>
          ))}
        </div>
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="h-8 w-8 shrink-0 text-muted-foreground"
          aria-label={themeLabel}
          title={themeLabel}
          onClick={toggleTheme}
        >
          {isDark ? <Sun aria-hidden="true" /> : <Moon aria-hidden="true" />}
        </Button>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mx-auto w-full max-w-2xl px-6 pt-16 pb-10">
      <div className="trace-rule" />
      <p className="label-mono mt-6">
        © {new Date().getFullYear()} {profile.name}
      </p>
    </footer>
  );
}
