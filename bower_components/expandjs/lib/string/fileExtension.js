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

    var assertArgument = require('../assert/assertArgument'),
        isString       = require('../tester/isString'),
        isVoid         = require('../tester/isVoid');

    /**
     * Returns the file extension from `string`.
     *
     * ```js
     *     XP.fileExtension('abc.js');
     *     // => 'js'
     *
     *     XP.fileExtension('abc.min.js');
     *     // => 'js'
     * ```
     *
     * @function fileExtension
     * @param {string} [string = ""] The string to search
     * @returns {string} Returns the file extension
     */
    module.exports = function fileExtension(string) {
        assertArgument(isVoid(string) || isString(string), 1, 'string');
        var i = string ? string.lastIndexOf('.') : -1;
        return i > 0 ? string.slice(i + 1) : '';
    };

}());