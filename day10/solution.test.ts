import { part1, part2 } from "./solution";

const testCasesPart1 = [
  [["1"], 82350],
  [["11"], 107312],
  [["21"], 139984],
  [["1211"], 182376],
  [["111221"], 237746],
];

const testCasesPart2 = [
  [["1"], 1166642],
  [["11"], 1520986],
  [["21"], 1982710],
  [["1211"], 2584304],
  [["111221"], 3369156],
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
