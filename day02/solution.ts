const calculateSurfaceArea = (
  length: number,
  width: number,
  height: number
) => {
  return 2 * width * length + 2 * width * height + 2 * height * length;
};

export const part1 = (input: string[]) => {
  return input.reduce((acc, curr) => {
    const [_length, _width, _height] = curr.split("x");

    const length = Number(_length);
    const width = Number(_width);
    const height = Number(_height);

    return (
      acc +
      calculateSurfaceArea(length, width, height) +
      Math.min(length * width, width * height, height * length)
    );
  }, 0);
};

export const part2 = (input: string[]) => {
  return input.reduce((acc, curr) => {
    const [_length, _width, _height] = curr.split("x");

    const length = Number(_length);
    const width = Number(_width);
    const height = Number(_height);

    const sortedSidesBySize = [length, width, height].sort((a, b) => a - b);

    return (
      acc +
      sortedSidesBySize[0] * 2 +
      sortedSidesBySize[1] * 2 +
      length * width * height
    );
  }, 0);
};
