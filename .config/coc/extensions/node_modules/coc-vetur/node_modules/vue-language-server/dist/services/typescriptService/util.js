"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isVueFile(path) {
    return path.endsWith('.vue');
}
exports.isVueFile = isVueFile;
/**
 * If the path ends with `.vue.ts`, it's a `.vue` file pre-processed by Vetur
 * to be used in TS Language Service
 */
function isVirtualVueFile(path) {
    return path.endsWith('.vue.ts') && !path.includes('node_modules');
}
exports.isVirtualVueFile = isVirtualVueFile;
/**
 * If the path ends with `.vue.template`, it's a `.vue` file's template part
 * pre-processed by Vetur to calculate template diagnostics in TS Language Service
 */
function isVirtualVueTemplateFile(path) {
    return path.endsWith('.vue.template');
}
exports.isVirtualVueTemplateFile = isVirtualVueTemplateFile;
//# sourceMappingURL=util.js.map