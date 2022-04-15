type callback = (...args: unknown[]) => unknown;

const limitFnCalls = (fn: callback, limit: number): callback => {
  let calls = 0;

  return (...args: unknown[]): unknown => {
    if (calls >= limit) return;

    calls++;

    return fn(...args);
  };
};

export default limitFnCalls;
