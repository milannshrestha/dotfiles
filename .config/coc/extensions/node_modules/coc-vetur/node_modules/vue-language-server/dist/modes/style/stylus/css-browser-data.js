"use strict";
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
const rawData = require('vscode-css-languageservice/lib/umd/data/browsers').cssData;
exports.cssData = {
    properties: rawData.properties || [],
    atDirectives: rawData.atDirectives || [],
    pseudoClasses: rawData.pseudoClasses || [],
    pseudoElements: rawData.pseudoElements || []
};
//# sourceMappingURL=css-browser-data.js.map