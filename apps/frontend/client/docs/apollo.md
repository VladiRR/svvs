# Fix Observable warning

# zen-observable-ts

Thin wrapper around [`zen-observable`](https://www.npmjs.com/package/zen-observable) and [`@types/zen-observable`](https://www.npmjs.com/package/@types/zen-observable), to support ESM exports as well as CommonJS exports, with TypeScript types provided by `@types/zen-observable`.

## Usage

After installing `zen-observable-ts` using a tool like [npm](https://www.npmjs.com/package/npm) or [yarn](https://yarnpkg.com/), you can import the `Observable` class by name:
```js
import { Observable } from "zen-observable-ts";
```
Note that this package does not currently have a default export, so the `{}` braces are mandatory.
