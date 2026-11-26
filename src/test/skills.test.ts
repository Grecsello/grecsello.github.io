import { describe, expect, it } from "vitest";
import { profile, projects } from "../lib/profile";

describe("Project technology coverage", () => {
  it("includes languages, platforms and tools used by the current projects while preserving existing skills", () => {
    const knownTechnologies = new Set([
      "C", "C++", "Python", "VHDL", "Java", "GDScript", "HTML", "CSS", "JavaScript",
      "STM32", "ESP32", "Arduino", "FreeRTOS", "Raspberry Pi",
      "KiCad", "Git", "Linux", "MATLAB", "Fusion 360", "Shapr3D", "Godot", "Piper", "NumPy", "GitHub Pages",
    ]);
    const skills = profile.skills.flatMap((group) => group.items).filter((item) => typeof item === "string");
    for (const technology of knownTechnologies) {
      expect(skills).toContain(technology);
    }
    for (const project of projects) {
      for (const tag of project.tags) {
        if (knownTechnologies.has(tag)) expect(skills).toContain(tag);
      }
    }
  });
});