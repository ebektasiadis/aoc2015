import { part1, part2 } from "./solution";

const testCasesPart1 = [
  [
    [
      "London to Dublin = 464",
      "London to Belfast = 518",
      "Dublin to Belfast = 141",
    ],
    605,
  ],
];

const testCasesPart2 = [
  [
    [
      "London to Dublin = 464",
      "London to Belfast = 518",
      "Dublin to Belfast = 141",
    ],
    982,
  ],
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
