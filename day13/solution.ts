type Relations = Record<string, Record<string, number>>;

const extractRelationsMap = (input: string[]) => {
  const relations = input.reduce((acc, curr) => {
    const expression =
      /(\w*) would (gain|lose) (\d*) happiness units by sitting next to (\w*)/g;

    const [_, firstName, gainOrLose, value, lastName] = expression.exec(curr)!;

    if (!acc[firstName]) {
      acc[firstName] = {};
    }

    acc[firstName][lastName] =
      parseInt(value) * (gainOrLose === "lose" ? -1 : 1);

    return acc;
  }, {} as Relations);

  const uniqueNames = Object.entries(relations).reduce((acc, [key, value]) => {
    if (!acc.has(key)) {
      acc.set(key, acc.size);
    }
    Object.keys(value)
      .filter((name) => !acc.has(name))
      .forEach((name) => acc.set(name, acc.size));

    return acc;
  }, new Map<string, number>());

  const relationMap = new Array(uniqueNames.size)
    .fill(0)
    .map(() => new Array(uniqueNames.size).fill(-Infinity));

  Object.entries(relations).forEach(([firstName, value]) => {
    Object.keys(value).forEach((lastName) => {
      const totalValue =
        relations[firstName][lastName] + relations[lastName][firstName];

      relationMap[uniqueNames.get(firstName)!][uniqueNames.get(lastName)!] =
        totalValue;
    });
  });

  return {
    relationMap,
    uniqueNames,
  };
};

const findBestSittingRecursively = (
  relationsMap: number[][],
  uniqueNames: Map<string, number>,
  currentSittings: string[] = [],
  currentScore = 0
) => {
  if (currentSittings.length === uniqueNames.size) {
    const firstName = uniqueNames.get(
      currentSittings[currentSittings.length - 1]
    )!;
    const lastName = uniqueNames.get(currentSittings[0])!;

    const result = currentScore + relationsMap[firstName][lastName];

    return result;
  }

  let maxScore = -Infinity;

  [...uniqueNames.keys()]
    .filter((name) => !currentSittings.includes(name))
    .forEach((name) => {
      const firstName = uniqueNames.get(
        currentSittings[currentSittings.length - 1]
      )!;
      const lastName = uniqueNames.get(name)!;
      const score = relationsMap[firstName][lastName];
      relationsMap[firstName][lastName];

      const resultScore = findBestSittingRecursively(
        relationsMap,
        uniqueNames,
        [...currentSittings, name],
        currentScore + score
      );

      maxScore = Math.max(maxScore, resultScore);
    });

  return maxScore;
};

export const part1 = (input: string[]) => {
  const { relationMap, uniqueNames } = extractRelationsMap(input);

  return findBestSittingRecursively(relationMap, uniqueNames, [
    [...uniqueNames.keys()][0],
  ]);
};

export const part2 = (input: string[]) => {
  const { relationMap, uniqueNames } = extractRelationsMap(input);

  uniqueNames.set("Me", uniqueNames.size);

  relationMap.forEach((relation) => relation.push(0));
  relationMap.push(new Array(uniqueNames.size).fill(0));

  return findBestSittingRecursively(relationMap, uniqueNames, [
    [...uniqueNames.keys()][0],
  ]);
};
