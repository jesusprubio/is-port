/**
 * @license
 *
 * Copyright (c) 2019, Jesús Rubio <jesusprubio@member.fsf.org>
 *
 * This source code is licensed under the MIT License found in
 * the LICENSE.txt file in the root directory of this source tree.
 */
"use strict";

import { isPort } from "../src";

/* eslint-disable no-console */
console.log(isPort(5)); // true
console.log(isPort(10000000)); // false
/* eslint-enable no-console */
