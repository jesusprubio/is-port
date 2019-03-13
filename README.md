# isPort

[![Build Status](https://travis-ci.org/jesusprubio/is-port.svg?branch=master)](https://travis-ci.org/jesusprubio/is-port)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![Downloads](https://img.shields.io/npm/dm/is-port.svg)](https://npmjs.com/is-port)
[![Install size](https://packagephobia.now.sh/badge?p=is-port)](https://packagephobia.now.sh/result?p=is-port)
[![stability-stable](https://img.shields.io/badge/stability-stable-green.svg)](https://github.com/emersion/stability-badges#stable)

:white_check_mark: Check if a number is a valid port respecting the [IANA Service Name and Transport Protocol Port Number Registry](https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml). Because I always forget if the last is 65535? 65534? xD.

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
