# isPort

[![Build Status](https://travis-ci.org/jesusprubio/is-port.js.svg?branch=master)](https://travis-ci.org/jesusprubio/is-port)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

:white_check_mark: Check if a number is a valid port respecting the [IANA Service Name and Transport Protocol Port Number Registry](https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml).

<div align="center">
	<p>
    <img src="https://raw.githubusercontent.com/jesusprubio/is-port/master/artifacts/demo.gif" alt="demo">
	</p>
	<p>
		<sub>:gift: Follow me on <a href="https://twitter.com/jesusprubio"><code>Twitter</code></a> if you like this project</sub>
	</p>
</div>

## Use

:pencil: More examples are provided in the [test](test) folder.

```javascript
const isPort = require('is-port');

console.log(isPort(5)); // true
console.log(isPort(10000000)); // false
console.log(isPort("a")); // throws exception
```

## License

:penguin: This library is released under the [MIT license](LICENSE).

## Contributing

:sunglasses: If you wanted to help please take a look to [this file](.github/CONTRIBUTING.md).

## API

:eyes: Full method definition.

### `version`

Library version.

### `isPort(port) -> valid`

Checks if the passed number is a valid port.

- `port` (number) - Candidate to check.
- `valid` (boolean) - Result of the validation.
