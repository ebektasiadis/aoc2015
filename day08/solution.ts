import { unescape } from "querystring";

export const part1 = (input: string[]) => {
  return input.reduce((acc, curr) => {
    const charactersOfCode = curr;
    const charactersInMemory = curr
      .substring(1, curr.length - 1)
      .replace(/(\\x[0-9a-f]{2}|\\"|\\\\)/g, ".");

    return (acc += charactersOfCode.length - charactersInMemory.length);
  }, 0);
};

export const part2 = (input: string[]) => {
  return input.reduce((acc, curr) => {
    const charactersOfCode = curr;
    const escapedCharactersOfCode = `"${curr.replace(/("|\\)/g, "\\$1")}"`;

    return (acc += escapedCharactersOfCode.length - charactersOfCode.length);
  }, 0);
};
