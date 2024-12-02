import { part1, part2 } from "./solution";

const testCasesPart1 = [
  [["ugknbfddgicrmopn"], 1],
  [["aaa"], 1],
  [["jchzalrnumimnmhp"], 0],
  [["haegwjzuvuyypxyu"], 0],
  [["dvszwmarrgswjxmb"], 0],
];

const testCasesPart2 = [
  [["qjhvhtzxzqqjkmpb"], 1],
  [["xxyxx"], 1],
  [["uurcxstgmygtbstg"], 0],
  [["ieodomkazucvgmuy"], 0],
  [["aaa"], 0],
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
