import { part1, part2 } from "./solution";

const testCasesPart1 = [[["cqjxjnds"], "cqjxxyzz"]];

const testCasesPart2 = [[["cqjxxyzz"], "cqkaabcc"]];

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
