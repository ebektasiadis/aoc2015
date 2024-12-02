export const part1 = (input: string[]) => {
  return input[0].split("").reduce((acc, curr) => {
    return (acc += curr === "(" ? 1 : -1);
  }, 0);
};

export const part2 = (input: string[]) => {
  const characters = input[0].split("");
  let position = 0;
  let floor = 0;

  while (floor >= 0 && position < characters.length) {
    floor += characters[position] === "(" ? 1 : -1;
    position += 1;
  }

  return position;
};
