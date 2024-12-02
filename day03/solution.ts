const serializePosition = (position: number[]) => {
  return position.join("#");
};

export const part1 = (input: string[]) => {
  const positionsVisited = new Set();
  let currentPosition = [0, 0];

  positionsVisited.add(serializePosition(currentPosition));

  input[0].split("").forEach((arrow) => {
    switch (arrow) {
      case "^":
        currentPosition[0]++;
        break;
      case "v":
        currentPosition[0]--;
        break;
      case ">":
        currentPosition[1]++;
        break;
      case "<":
        currentPosition[1]--;
        break;
    }

    positionsVisited.add(serializePosition(currentPosition));
  });

  return positionsVisited.size;
};

export const part2 = (input: string[]) => {
  const positionsVisited = new Set();
  let currentSantaPosition = [0, 0];
  let currentRoboSantaPosition = [0, 0];

  positionsVisited.add(serializePosition(currentSantaPosition));

  input[0].split("").forEach((arrow, index) => {
    const isSantaTurn = index % 2 === 0;
    const currentTurnPosition = isSantaTurn
      ? currentSantaPosition
      : currentRoboSantaPosition;

    switch (arrow) {
      case "^":
        currentTurnPosition[0]++;
        break;
      case "v":
        currentTurnPosition[0]--;
        break;
      case ">":
        currentTurnPosition[1]++;
        break;
      case "<":
        currentTurnPosition[1]--;
        break;
    }

    positionsVisited.add(serializePosition(currentTurnPosition));
  });

  return positionsVisited.size;
};
