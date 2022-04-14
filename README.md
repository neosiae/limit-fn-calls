# limit-fn-calls
Limit how many times function can be called

## Usage

```ts
import limitFnCalls from 'limit-fn-calls';

const limitedLog = limitFnCalls(console.log, 3);

limitedLog('1'); // 1
limitedLog('2'); // 2
limitedLog('3'); // 3
limitedLog('4'); // Stops here
```
