type ReindeerStats = {
  speed: number;
  flyDuration: number;
  restDuration: number;
};

const extractReindeerStatistics = (input: string[]) => {
  return input.reduce((acc, curr) => {
    const expression =
      /(\w*) can fly (\d*) km\/s for (\d*) seconds, but then must rest for (\d*) seconds./g;

    const [_, name, speed, flyDuration, restDuration] = expression.exec(curr)!;

    acc[name] = {
      speed: parseInt(speed),
      flyDuration: parseInt(flyDuration),
      restDuration: parseInt(restDuration),
    };

    return acc;
  }, {} as Record<string, ReindeerStats>);
};

const getTravellingDistance = (stats: ReindeerStats, timeframe: number) => {
  let fullCycles = Math.floor(
    timeframe / (stats.flyDuration + stats.restDuration)
  );

  let remainingCycle =
    timeframe - fullCycles * (stats.flyDuration + stats.restDuration);

  return (
    fullCycles * stats.flyDuration * stats.speed +
    Math.min(stats.flyDuration, remainingCycle) * stats.speed
  );
};

export const part1 = (input: string[]) => {
  const reindeerStatistics = extractReindeerStatistics(input);
  const TIMEFRAME_IN_SECONDS = 2503;

  const travellingDistances = Object.values(reindeerStatistics).map((stats) =>
    getTravellingDistance(stats, TIMEFRAME_IN_SECONDS)
  );

  return Math.max(...travellingDistances);
};

export const part2 = (input: string[]) => {
  const reindeerStatistics = extractReindeerStatistics(input);
  const TIMEFRAME_IN_SECONDS = 2503;

  const distances = new Array(Object.keys(reindeerStatistics).length).fill(0);
  const points = new Array(Object.keys(reindeerStatistics).length).fill(0);

  for (let i = 1; i <= TIMEFRAME_IN_SECONDS; i++) {
    Object.values(reindeerStatistics).forEach((stats, index) => {
      const fullCycles = Math.floor(
        (i - 1) / (stats.flyDuration + stats.restDuration)
      );

      const timeframeInCycle =
        i - fullCycles * (stats.flyDuration + stats.restDuration);

      distances[index] +=
        timeframeInCycle <= stats.flyDuration ? stats.speed : 0;
    });

    const maxVal = Math.max(...distances);

    for (let j = 0; j < distances.length; j++) {
      if (distances[j] === maxVal) {
        points[j]++;
      }
    }
  }

  return Math.max(...points);
};
