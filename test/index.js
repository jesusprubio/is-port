/**
 * @license
 *
 * Copyright (c) 2019, Jesús Rubio <jesusprubio@member.fsf.org>
 *
 * This source code is licensed under the Apache License, Version 2.0 found in
 * the LICENSE.txt file in the root directory of this source tree.
 */

'use strict';

import test from 'ava';
import isPort from '..';

test('should throw if no parameter is passed', t => {
  t.throws(() => isPort(), 'Required: port');
});

test('should throw if the parameter is passed', t => {
  t.throws(() => isPort('a'), 'Number expected');
});

test('should return true for a valid one', t => {
  t.true(isPort(5));
});

test('should return false for a not valid one', t => {
  t.falsy(isPort(1000000));
});
