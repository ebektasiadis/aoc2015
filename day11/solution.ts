const hasIncreasingLetters = (input: string) => {
  const charCodes = [...input].map((code) => code.charCodeAt(0));

  for (let i = 0; i < charCodes.length - 3; i++) {
    if (
      charCodes[i] + 1 === charCodes[i + 1] &&
      charCodes[i + 1] + 1 === charCodes[i + 2]
    ) {
      return true;
    }
  }

  return false;
};

const containsBannedLetters = (input: string) => {
  return input.match(/[iol]/g) === null;
};

const containsTwoRepeatedSequences = (input: string) => {
  let pairsFound = 0;
  for (let i = 0; i < input.length - 1; i++) {
    if (input[i] === input[i + 1]) {
      pairsFound++;
      i++;
    }
  }

  return pairsFound >= 2;
};

const calculateNextPassword = (input: string) => {
  const chars = [...input];
  let pointer = chars.length - 1;
  let hasFlipped = false;

  do {
    hasFlipped = chars[pointer].charCodeAt(0) + 1 >= 123;
    const newChar =
      ((chars[pointer].charCodeAt(0) + 1) % 123) + (hasFlipped ? 97 : 0);

    chars[pointer] = String.fromCharCode(newChar);
    pointer--;
  } while (hasFlipped && pointer >= 0);

  if (pointer === -1 && hasFlipped) {
    chars.unshift("a");
  }

  return chars.join("");
};

export const part1 = (input: string[]) => {
  let password = input[0];

  while (
    !hasIncreasingLetters(password) ||
    !containsBannedLetters(password) ||
    !containsTwoRepeatedSequences(password)
  ) {
    password = calculateNextPassword(password);
  }

  return password;
};

export const part2 = (input: string[]) => {
  const part1Solution = part1(input);
  return part1([calculateNextPassword(part1Solution)]);
};
