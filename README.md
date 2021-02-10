# babel-plugin-pattern-matching

Advanced pattern matching

## Example

**In**

```js
// input code
```

**Out**

```js
"use strict";

// output code
```

## Installation

```sh
$ npm install babel-plugin-pattern-matching
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "plugins": ["pattern-matching"]
}
```

### Via CLI

```sh
$ babel --plugins pattern-matching script.js
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  plugins: ["pattern-matching"]
});
```
