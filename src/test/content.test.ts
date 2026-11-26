import { describe, expect, it } from "vitest";

import { profile, projects, ui } from "@/lib/profile";

// The site must be fully available in both Italian and English.
describe("bilingual content", () => {
  const entries: [string, { it: string; en: string }][] = [
    ["role", profile.role],
    ["tagline", profile.tagline],
    ...profile.skills.map((s) => [`skill ${s.area.it}`, s.area] as [string, { it: string; en: string }]),
    ...projects.flatMap((p) => [
      [`title ${p.title.it}`, p.title] as [string, { it: string; en: string }],
      [`description ${p.title.it}`, p.description] as [string, { it: string; en: string }],
    ]),
    ...Object.entries(ui).flatMap(([section, strings]) =>
      Object.entries(strings).map(([key, value]) => [`${section}.${key}`, value] as [string, { it: string; en: string }]),
    ),
  ];

  it.each(entries)("%s has Italian and English text", (_name, value) => {
    expect(value.it.trim()).not.toBe("");
    expect(value.en.trim()).not.toBe("");
  });
});
