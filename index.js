/**
 * @license
 *
 * Copyright (c) 2019, Jesús Rubio <jesusprubio@member.fsf.org>
 *
 * This source code is licensed under the MIT License found in
 * the LICENSE.txt file in the root directory of this source tree.
 */

'use strict';

module.exports = port => {
  if (!port) { throw new Error('Required: port'); }

  if (typeof port !== 'number') { throw new TypeError('Number expected'); }

  return port > 0 && port <= 65535;
};
