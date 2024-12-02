const parseLine = (line: string) => {
  const expr = new RegExp(
    "(turn on|turn off|toggle) (\\d*),(\\d*) through (\\d*),(\\d*)",
    "g"
  );

  const groups = expr.exec(line)!;

  return {
    instruction: groups[1],
    startRow: Number(groups[2]),
    startCol: Number(groups[3]),
    endRow: Number(groups[4]),
    endCol: Number(groups[5]),
  };
};

export const part1 = (input: string[]) => {
  const grid = Array(1000)
    .fill(false)
    .map(() => Array(1000).fill(false));

  input.forEach((row) => {
    const args = parseLine(row);

    for (let i = args.startRow; i <= args.endRow; i++) {
      for (let j = args.startCol; j <= args.endCol; j++) {
        switch (args.instruction) {
          case "turn on":
            grid[i][j] = true;
            break;
          case "turn off":
            grid[i][j] = false;
            break;
          case "toggle":
            grid[i][j] = !grid[i][j];
            break;
        }
      }
    }
  });

  return grid.flatMap((row) => row).filter(Boolean).length;
};

export const part2 = (input: string[]) => {
  const grid = Array(1000)
    .fill(0)
    .map(() => Array(1000).fill(0));

  input.forEach((row) => {
    const args = parseLine(row);

    for (let i = args.startRow; i <= args.endRow; i++) {
      for (let j = args.startCol; j <= args.endCol; j++) {
        switch (args.instruction) {
          case "turn on":
            grid[i][j]++;
            break;
          case "turn off":
            grid[i][j]--;
            if (grid[i][j] < 0) {
              grid[i][j] = 0;
            }
            break;
          case "toggle":
            grid[i][j] += 2;
            break;
        }
      }
    }
  });

  return grid.flatMap((row) => row).reduce((acc, curr) => acc + curr, 0);
};
