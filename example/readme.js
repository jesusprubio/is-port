/**
 * @license
 *
 * Copyright (c) 2019, Jesús Rubio <jesusprubio@member.fsf.org>
 *
 * This source code is licensed under the Apache License, Version 2.0 found in
 * the LICENSE.txt file in the root directory of this source tree.
 */

'use strict';

const isPort = require('..');

/* eslint-disable no-console */
console.log(isPort(5)); // true
console.log(isPort(10000000)); // false
/* eslint-enable no-console */
