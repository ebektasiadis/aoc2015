import { part1 } from "./solution";

const testCasesPart1 = [
  [["abcdef"], 609043],
  [["pqrstuv"], 1048970],
];

describe("Part 1", () => {
  test.each(testCasesPart1)(
    "%p should return %s",
    (input: any, output: any) => {
      expect(part1(input)).toBe(output);
    }
  );
});
