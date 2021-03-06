/*jslint browser: true, devel: true, node: true, ass: true, nomen: true, unparam: true, indent: 4 */

/**
 * @license
 * Copyright (c) 2015 The ExpandJS authors. All rights reserved.
 * This code may only be used under the BSD style license found at https://expandjs.github.io/LICENSE.txt
 * The complete set of authors may be found at https://expandjs.github.io/AUTHORS.txt
 * The complete set of contributors may be found at https://expandjs.github.io/CONTRIBUTORS.txt
 */
(function () {
    "use strict";

    var isNullable = require('../tester/isNullable');

    /**
     * Checks if `value` is not nullable.
     *
     * ```js
     *     XP.isAny(0)
     *     // => true
     *
     *     XP.isAny(false)
     *     // => true
     *
     *     XP.isAny('')
     *     // => false
     *
     *     XP.isAny(null)
     *     // => false
     * ```
     *
     * @function isAny
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` or `false` accordingly to the check.
     */
    module.exports = function isAny(value) {
        return !isNullable(value);
    };

}());