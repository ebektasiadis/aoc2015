import { part1, part2 } from "./solution";

const testCasesPart1 = [
  [
    [
      String.raw`""`,
      String.raw`"abc"`,
      String.raw`"aaa\"aaa"`,
      String.raw`"\x27"`,
    ],
    12,
  ],
  [[String.raw`"\\\"`], 3],
];

const testCasesPart2 = [
  [
    [
      String.raw`""`,
      String.raw`"abc"`,
      String.raw`"aaa\"aaa"`,
      String.raw`"\x27"`,
    ],
    19,
  ],
  [[String.raw`"\\\"`], 7],
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
