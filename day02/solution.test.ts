import { part1, part2 } from "./solution";

const testCasesPart1 = [
  [["2x3x4"], 58],
  [["1x1x10"], 43],
];

const testCasesPart2 = [
  [["2x3x4"], 34],
  [["1x1x10"], 14],
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
