const VOWELS = ["a", "e", "i", "o", "u"];
const NOT_ALLOWED_SUBSTRINGS = ["ab", "cd", "pq", "xy"];
const MIN_VOWELS_COUNT = 3;

const checkWordForMinVowelCount = (word: string) => {
  const pattern = VOWELS.join();
  const expression = new RegExp(`[${pattern}]`, "g");

  return [...word.matchAll(expression)].length >= MIN_VOWELS_COUNT;
};

const checkWordForDoubleLetter = (word: string) => {
  const letters = word.split("");
  for (let i = 0; i < letters.length - 1; i++) {
    if (letters[i] === letters[i + 1]) {
      return true;
    }
  }

  return false;
};

const checkForNotAllowedSubstrings = (word: string) => {
  const pattern = NOT_ALLOWED_SUBSTRINGS.join("|");
  const expression = new RegExp(`(${pattern})`, "g");

  return word.match(expression) === null;
};

const checkForPairsExistance = (word: string) => {
  const letters = word.split("");
  const pairsMap = new Map();

  for (let i = 0; i < letters.length - 1; i++) {
    const pair = letters[i] + letters[i + 1];

    if (pairsMap.has(pair)) {
      if (pairsMap.get(pair)[1] !== i) {
        return true;
      }
      continue;
    }

    pairsMap.set(pair, [i, i + 1]);
  }

  return false;
};

const checkForRepeatingLetter = (word: string) => {
  const letters = word.split("");

  for (let i = 0; i < letters.length - 2; i++) {
    if (letters[i] === letters[i + 2] && letters[i] !== letters[i + 1]) {
      return true;
    }
  }

  return false;
};

export const part1 = (input: string[]) => {
  return input
    .filter(checkForNotAllowedSubstrings)
    .filter(checkWordForDoubleLetter)
    .filter(checkWordForMinVowelCount).length;
};

export const part2 = (input: string[]) => {
  return input.filter(checkForPairsExistance).filter(checkForRepeatingLetter)
    .length;
};
