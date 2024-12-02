import * as crypto from "node:crypto";

export const part1 = (input: string[]) => {
  const secretKey = input[0];
  let answer = 0;
  while (true) {
    const hash = crypto
      .createHash("md5")
      .update(`${secretKey}${answer}`)
      .digest("hex");

    if (hash.startsWith("00000")) {
      break;
    }

    answer++;
  }

  return answer;
};

export const part2 = (input: string[]) => {
  const secretKey = input[0];
  let answer = 0;
  while (true) {
    const hash = crypto
      .createHash("md5")
      .update(`${secretKey}${answer}`)
      .digest("hex");

    if (hash.startsWith("000000")) {
      break;
    }

    answer++;
  }

  return answer;
};
