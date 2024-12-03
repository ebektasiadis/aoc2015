enum Operators {
  Not = "NOT",
  Or = "OR",
  And = "AND",
  LShift = "LSHIFT",
  RShift = "RSHIFT",
}

const OPERATORS: string[] = Object.values(Operators);
const UINT_MAX_VALUE = 65535;

type InstructionDetails = {
  variablesNeeded: string[];
  resultVariable: string;
  operator?: Operators;
  leftPartTokens: string[];
  instruction: string;
};

const parseInstruction = (instruction: string): InstructionDetails => {
  const [leftPart, rightPart] = instruction.split(" -> ");
  const leftPartTokens = leftPart.split(" ");
  const leftPartVariables = leftPartTokens.filter(
    (token) => !OPERATORS.includes(token) && isNaN(parseInt(token))
  );

  const operator = leftPartTokens.filter((token) =>
    OPERATORS.includes(token)
  )?.[0] as undefined | Operators;

  return {
    variablesNeeded: leftPartVariables,
    resultVariable: rightPart,
    instruction,
    operator,
    leftPartTokens,
  };
};

const executeInstruction = (
  knownVariables: Record<string, number>,
  instructionDetails: InstructionDetails
): number => {
  instructionDetails.variablesNeeded.forEach((variable) => {
    instructionDetails.instruction = instructionDetails.instruction.replace(
      variable,
      `${knownVariables[variable]}`
    );
  });

  instructionDetails = parseInstruction(instructionDetails.instruction);

  if (!instructionDetails.operator) {
    return parseInt(instructionDetails.leftPartTokens[0]);
  }

  if (instructionDetails.operator === Operators.Not) {
    const result =
      ~parseInt(instructionDetails.leftPartTokens[1]) % UINT_MAX_VALUE;

    return result < 0 ? UINT_MAX_VALUE + result + 1 : result;
  }

  const beforeOperator = parseInt(instructionDetails.leftPartTokens[0]);
  const afterOperator = parseInt(instructionDetails.leftPartTokens[2]);

  switch (instructionDetails.leftPartTokens[1]) {
    case Operators.And:
      return beforeOperator & afterOperator;
    case Operators.Or:
      return beforeOperator | afterOperator;
    case Operators.LShift:
      return beforeOperator << afterOperator;
    case Operators.RShift:
      return beforeOperator >> afterOperator;
  }

  throw new Error("Couldn't execute instruction");
};

const extractNewVariables = (
  knownVariables: Record<string, number>,
  instructionsDetails: InstructionDetails[]
) => {
  instructionsDetails.forEach((instructionDetails) => {
    const allVariablesNeededAreKnown = instructionDetails.variablesNeeded.every(
      (variable) => knownVariables[variable] !== undefined
    );

    if (
      allVariablesNeededAreKnown &&
      knownVariables[instructionDetails.resultVariable] === undefined
    ) {
      knownVariables[instructionDetails.resultVariable] = executeInstruction(
        knownVariables,
        instructionDetails
      );
    }
  });
};

export const part1 = (
  input: string[],
  knownVariables: Record<string, number> = {}
) => {
  const instructionsDetails = input.map(parseInstruction);

  while (!knownVariables["a"]) {
    extractNewVariables(knownVariables, instructionsDetails);
  }

  return knownVariables["a"];
};

export const part2 = (input: string[]) => {
  return part1(input, {
    b: part1(input),
  });
};
