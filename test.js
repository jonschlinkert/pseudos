/*!
 * pseudos <https://github.com/jonschlinkert/pseudos>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License
 */

'use strict';

var assert = require('assert');
var pseudos = require('./');

describe('pseudos', function () {
  it('should have property.', function () {
    assert.equal(pseudos.indexOf('after') !== -1, true);
    assert.equal(pseudos.indexOf('before') !== -1, true);
  });
});

