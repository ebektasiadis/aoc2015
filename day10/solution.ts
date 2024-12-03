const compressInput = (input: string) => {
  let result = "";
  let counter = 1;
  let lastEncounter = input[0];

  for (let i = 1; i < input.length; i++) {
    if (input[i] === lastEncounter) {
      counter++;
    } else {
      result += `${counter}${lastEncounter}`;
      lastEncounter = input[i];
      counter = 1;
    }
  }
  result += `${counter}${lastEncounter}`;

  return result;
};

export const part1 = (input: string[]) => {
  let row = input[0];

  for (let i = 1; i <= 40; i++) {
    row = compressInput(row);
  }

  return row.length;
};

export const part2 = (input: string[]) => {
  let row = input[0];

  for (let i = 1; i <= 50; i++) {
    row = compressInput(row);
  }

  return row.length;
};
