import limitFnCalls from '../index';

describe('limitFnCalls', () => {
  it('stops function call after limit is reached', () => {
    const fn = jest.fn();
    const limitedFn = limitFnCalls(fn, 2);

    limitedFn();
    limitedFn();
    limitedFn();

    expect(fn).toBeCalledTimes(2);
  });
});
