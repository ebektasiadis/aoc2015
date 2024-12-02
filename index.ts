import fs from "node:fs/promises";

if (process.argv.length < 3) {
  console.error("Please provide a day as an argument");
  process.exit(1);
}

(async () => {
  const parseInputFile = async (path: string) => {
    const readResult = await fs.readFile(path, "utf-8");
    return readResult.split("\n");
  };

  const day = process.argv[2];
  const dayModule = await import(`./day${day}/solution`);
  const input = await parseInputFile(`./day${day}/input`);

  const solution1 = dayModule.part1?.(input);
  const solution2 = dayModule.part2?.(input);

  console.table({ day: Number(day), solution1, solution2 });
})();
