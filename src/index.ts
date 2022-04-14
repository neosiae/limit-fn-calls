const limitFnCalls = (fn: Function, limit: number): Function => {
  let calls = 0;

  return (...args: unknown[]): unknown => {
    if (calls >= limit) return;

    calls++;

    return fn(...args);
  }
};
