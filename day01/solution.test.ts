import { part1, part2 } from "./solution";

const testCasesPart1 = [
  [["(())"], 0],
  [["()()"], 0],
  [["((("], 3],
  [["(()(()("], 3],
  [["))((((("], 3],
  [["())"], -1],
  [["))("], -1],
  [[")))"], -3],
  [[")())())"], -3],
];

const testCasesPart2 = [
  [[")"], 1],
  [["()())"], 5],
  [["((()))())"], 9],
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
