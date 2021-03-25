# Fix Observable warning

### fix  Observable warning Apollo


* Before run angular app

 find

`node_modules/@apollo/client/utilities/observables/Observable.js`

replace

`import { Observable } from "zen-observable";`

to

`import { Observable } from "zen-observable-ts";`

* Run frontend application
```
yarn run frontend-client:start // start frontend client 
yarn run frontend-admin:start // start frontend admin 
```
---
---
### zen-observable-ts

Thin wrapper around [`zen-observable`](https://www.npmjs.com/package/zen-observable) and [`@types/zen-observable`](https://www.npmjs.com/package/@types/zen-observable), to support ESM exports as well as CommonJS exports, with TypeScript types provided by `@types/zen-observable`.

## Usage

After installing `zen-observable-ts` using a tool like [npm](https://www.npmjs.com/package/npm) or [yarn](https://yarnpkg.com/), you can import the `Observable` class by name:
```js
import { Observable } from "zen-observable-ts";
```
Note that this package does not currently have a default export, so the `{}` braces are mandatory.
