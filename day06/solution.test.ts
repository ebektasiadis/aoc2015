import { part1, part2 } from "./solution";

const testCasesPart1 = [
  [
    [
      "turn on 0,0 through 999,999",
      "toggle 0,0 through 999,0",
      "turn off 499,499 through 500,500",
    ],
    998996,
  ],
];

const testCasesPart2 = [
  [["turn on 0,0 through 0,0", "toggle 0,0 through 999,999"], 2000001],
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
