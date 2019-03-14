/**
 * @license
 *
 * Copyright (c) 2019, Jesús Rubio <jesusprubio@member.fsf.org>
 *
 * This source code is licensed under the MIT License found in
 * the LICENSE.txt file in the root directory of this source tree.
 */

'use strict';

import test from 'ava';
import { isPort } from '../';

test('should return true for a valid one', t => {
  t.true(isPort(5));
});

test('should return false for a not valid one', t => {
  t.falsy(isPort(1000000));
});
