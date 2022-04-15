type limitFn = (...args: unknown[]) => unknown;

const limitFnCalls = (fn: limitFn, limit: number): limitFn => {
  let calls = 0;

  return (...args: unknown[]): unknown => {
    if (calls >= limit) return;

    calls++;

    return fn(...args);
  };
};

export default limitFnCalls;
