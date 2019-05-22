# @mesaquen/isit

Javascript library to easy test type of an value.  
Returns `true` if the type of the given value matches the expected, otherwise `false`.

## Install

`npm i --save @mesaquen/isit`  
or  
`yarn add @mesaquen/isit`

## Usage

```javascript
import isIt from '@mesaquen/isit';

...

isIt.number(5); // true
isIt.undefined('some text'); // false
```

## Available methods

- `number`
- `string`
- `boolean`
- `undefined`
- `null`
- `undefinedOrNull`
