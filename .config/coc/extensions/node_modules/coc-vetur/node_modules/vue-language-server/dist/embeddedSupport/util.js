"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode_languageserver_types_1 = require("vscode-languageserver-types");
function offsetsToRange(document, start, end) {
    return vscode_languageserver_types_1.Range.create(document.positionAt(start), document.positionAt(end));
}
exports.offsetsToRange = offsetsToRange;
//# sourceMappingURL=util.js.map