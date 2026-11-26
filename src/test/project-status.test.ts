import { describe, expect, it } from "vitest";
import { projects } from "@/lib/profile";

describe("Nixie clock project", () => {
  it("is in progress without an invented completion year or implementation tools", () => {
    const clock = projects.find((project) => project.tags.includes("Nixie"));
    expect(clock).toBeDefined();
    expect(clock?.status).toBe("ongoing");
    expect(clock?.year).toBeUndefined();
    expect(clock?.tags).toEqual(["Nixie"]);
  });
});