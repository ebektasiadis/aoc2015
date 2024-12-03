import { part1, part2 } from "./solution";

const testCasesPart1 = [
  [[String.raw`[1,2,3]`], 6],
  [[String.raw`{"a":2,"b":4}`], 6],
  [[String.raw`[[[3]]]`], 3],
  [[String.raw`{"a":{"b":4},"c":-1}`], 3],
  [[String.raw`{"a":[-1,1]}`], 0],
  [[String.raw`[-1,{"a":1}]`], 0],
  [[String.raw`[]`], 0],
];

const testCasesPart2 = [
  [[String.raw`[1,2,3]`], 6],
  [[String.raw`{"a":2,"b":4}`], 6],
  [[String.raw`[[[3]]]`], 3],
  [[String.raw`{"a":{"b":4},"c":-1}`], 3],
  [[String.raw`{"a":[-1,1]}`], 0],
  [[String.raw`[-1,{"a":1}]`], 0],
  [[String.raw`[]`], 0],
  [[String.raw`[1,{"c":"red","b":2},3]`], 4],
  [[String.raw`{"d":"red","e":[1,2,3,4],"f":5}`], 0],
  [[String.raw`[1,"red",5]`], 6],
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
