"use strict";
const limitFnCalls = (fn, limit) => {
    let calls = 0;
    return (...args) => {
        if (calls >= limit)
            return;
        calls++;
        fn(...args);
    };
};
