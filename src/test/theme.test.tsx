import { act, cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { SiteHeader } from "@/components/site-header";

vi.mock("@tanstack/react-router", () => ({ Link: ({ children }: { children: React.ReactNode }) => <span>{children}</span> }));
vi.mock("@/lib/i18n", () => ({ useLang: () => ({ lang: "it", setLang: vi.fn() }) }));

describe("System theme", () => {
  let listener: ((event: { matches: boolean }) => void) | undefined;
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.classList.remove("dark");
    listener = undefined;
    vi.stubGlobal("matchMedia", vi.fn(() => ({
      matches: true,
      addEventListener: (_name: string, handler: typeof listener) => { listener = handler; },
      removeEventListener: vi.fn(),
    })));
  });
  afterEach(() => { cleanup(); vi.unstubAllGlobals(); });

  it("uses the visitor's dark system preference and follows live changes", () => {
    render(<SiteHeader />);
    expect(document.documentElement.classList.contains("dark")).toBe(true);
    act(() => listener?.({ matches: false }));
    expect(document.documentElement.classList.contains("dark")).toBe(false);
    act(() => listener?.({ matches: true }));
    expect(document.documentElement.classList.contains("dark")).toBe(true);
  });

  it("keeps an explicit manual choice instead of overriding it with the system", () => {
    render(<SiteHeader />);
    fireEvent.click(screen.getByRole("button", { name: "Attiva tema chiaro" }));
    act(() => listener?.({ matches: true }));
    expect(document.documentElement.classList.contains("dark")).toBe(false);
    expect(localStorage.getItem("site-theme")).toBe("light");
  });
});