const sumValuesRecursively = (content: unknown | unknown[]) => {
  if (typeof content !== "number" && typeof content !== "object") {
    return 0;
  }

  let sum = 0;

  Object.entries(content!).forEach(([key, value]) => {
    if (typeof value === "number") {
      sum += value;
    }

    if (typeof value === "object") {
      sum += sumValuesRecursively(value);
    }
  });

  return sum;
};

const sumValuesRecursivelyWithoutRed = (content: unknown | unknown[]) => {
  if (typeof content !== "number" && typeof content !== "object") {
    return 0;
  }

  if (
    typeof content === "object" &&
    !Array.isArray(content) &&
    !!content &&
    !!Object.values(content).includes("red")
  ) {
    return 0;
  }

  let sum = 0;

  Object.entries(content!).forEach(([key, value]) => {
    if (typeof value === "number") {
      sum += value;
    }

    if (typeof value === "object") {
      sum += sumValuesRecursivelyWithoutRed(value);
    }
  });

  return sum;
};

export const part1 = (input: string[]) => {
  const jsonContent = JSON.parse(input.join(""));
  return sumValuesRecursively(jsonContent);
};

export const part2 = (input: string[]) => {
  const jsonContent = JSON.parse(input.join(""));
  return sumValuesRecursivelyWithoutRed(jsonContent);
};
