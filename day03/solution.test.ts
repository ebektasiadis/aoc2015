import { part1, part2 } from "./solution";

const testCasesPart1 = [
  [[">"], 2],
  [["^>v<"], 4],
  [["^v^v^v^v^v"], 2],
];

const testCasesPart2 = [
  [["^v"], 3],
  [["^>v<"], 3],
  [["^v^v^v^v^v"], 11],
];

describe("Part 1", () => {
  test.each(testCasesPart1)(
    "%p should return %s",
    (input: any, output: any) => {
      expect(part1(input)).toBe(output);
    }
  );
});

describe("Part 2", () => {
  test.each(testCasesPart2)(
    "%p should return %s",
    (input: any, output: any) => {
      expect(part2(input)).toBe(output);
    }
  );
});
