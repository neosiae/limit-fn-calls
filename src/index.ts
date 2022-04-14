const limitFnCalls = (fn: Function, limit: number): Function => {
  let calls = 0;

  return (...args: unknown[]): void => {
    if (calls >= limit) return;

    calls++;

    fn(...args);
  }
};
