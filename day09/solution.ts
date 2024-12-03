type Origin = string;

type Destination = {
  to: string;
  distance: number;
};

type Destinations = Destination[];

export const part1 = (input: string[]) => {
  const trips = input.reduce((acc, curr) => {
    const expression = /([^\s]*) to ([^\s]*) = (\d*)/g;
    const [, from, to, distance] = expression.exec(curr)!;

    acc[from] = [...(acc[from] ?? []), { to, distance: parseInt(distance) }];
    acc[to] = [...(acc[to] ?? []), { to: from, distance: parseInt(distance) }];

    return acc;
  }, {} as Record<Origin, Destinations>);

  const locations = new Map<string, number>();

  Object.entries(trips).forEach(([origin, destinations]) => {
    if (!locations.has(origin)) {
      locations.set(origin, locations.size);
    }

    destinations
      .filter(({ to }) => !locations.has(to))
      .forEach(({ to }) => {
        locations.set(to, locations.size);
      });
  });

  return Math.min(
    ...Object.keys(trips).map((origin) => findMinRecursively(trips, [origin]))
  );
};

const findMinRecursively = (
  trips: Record<Origin, Destinations>,
  hasVisited: Origin[] = []
): number => {
  if (hasVisited.length === Object.keys(trips).length) {
    let distance = 0;
    for (let i = 0; i < hasVisited.length - 1; i++) {
      distance += trips[hasVisited[i]].find(
        (destination) => destination.to === hasVisited[i + 1]
      )?.distance!;
    }

    return distance;
  }

  const possibleVisits = trips[hasVisited[hasVisited.length - 1]].filter(
    ({ to }) => {
      return !hasVisited.includes(to);
    }
  );

  let minDistance = Infinity;

  possibleVisits.forEach((possibleVisit) => {
    minDistance = Math.min(
      minDistance,
      findMinRecursively(trips, [...hasVisited, possibleVisit.to])
    );
  });

  return minDistance;
};

const findMaxRecursively = (
  trips: Record<Origin, Destinations>,
  hasVisited: Origin[] = []
): number => {
  if (hasVisited.length === Object.keys(trips).length) {
    let distance = 0;
    for (let i = 0; i < hasVisited.length - 1; i++) {
      distance += trips[hasVisited[i]].find(
        (destination) => destination.to === hasVisited[i + 1]
      )?.distance!;
    }

    return distance;
  }

  const possibleVisits = trips[hasVisited[hasVisited.length - 1]].filter(
    ({ to }) => {
      return !hasVisited.includes(to);
    }
  );

  let maxDistance = -Infinity;

  possibleVisits.forEach((possibleVisit) => {
    maxDistance = Math.max(
      maxDistance,
      findMaxRecursively(trips, [...hasVisited, possibleVisit.to])
    );
  });

  return maxDistance;
};

export const part2 = (input: string[]) => {
  const trips = input.reduce((acc, curr) => {
    const expression = /([^\s]*) to ([^\s]*) = (\d*)/g;
    const [, from, to, distance] = expression.exec(curr)!;

    acc[from] = [...(acc[from] ?? []), { to, distance: parseInt(distance) }];
    acc[to] = [...(acc[to] ?? []), { to: from, distance: parseInt(distance) }];

    return acc;
  }, {} as Record<Origin, Destinations>);

  const locations = new Map<string, number>();

  Object.entries(trips).forEach(([origin, destinations]) => {
    if (!locations.has(origin)) {
      locations.set(origin, locations.size);
    }

    destinations
      .filter(({ to }) => !locations.has(to))
      .forEach(({ to }) => {
        locations.set(to, locations.size);
      });
  });

  return Math.max(
    ...Object.keys(trips).map((origin) => findMaxRecursively(trips, [origin]))
  );
};
