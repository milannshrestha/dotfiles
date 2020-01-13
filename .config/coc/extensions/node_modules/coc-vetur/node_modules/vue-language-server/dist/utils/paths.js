"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const os_1 = require("os");
const vscode_uri_1 = require("vscode-uri");
/**
 * Vetur mainly deals with paths / uris from two objects
 *
 * - `TextDocument` from `vscode-languageserver`
 * - `SourceFile` from `typescript`
 *
 * ## `TextDocument.uri`
 *
 * - macOS / Linux: file:///foo/bar.vue
 * - Windows: file:///c%3A/foo/bar.vue (%3A is `:`)
 *
 * ## `SourceFile.fileName`
 *
 * - macOS / Linux: /foo/bar.vue
 * - Windows: c:/foo/bar.vue
 *
 * ## vscode-uri
 *
 * - `Uri.parse`: Takes full URI starting with `file://`
 * - `Uri.file`: Takes file path
 *
 * ### `fsPath` vs `path`
 *
 * - macOS / Linux:
 * ```
 * > Uri.parse('file:///foo/bar.vue').fsPath
 * '/foo/bar.vue'
 * > Uri.parse('file:///foo/bar.vue').path
 * '/foo/bar.vue'
 * ```
 * - Windows
 * ```
 * > Uri.parse('file:///c%3A/foo/bar.vue').fsPath
 * 'c:\\foo\\bar.vue' (\\ escapes to \)
 * > Uri.parse('file:///c%3A/foo/bar.vue').path
 * '/c:/foo/bar.vue'
 * ```
 */
function getFileFsPath(documentUri) {
    return vscode_uri_1.default.parse(documentUri).fsPath;
}
exports.getFileFsPath = getFileFsPath;
function getFilePath(documentUri) {
    const IS_WINDOWS = os_1.platform() === 'win32';
    if (IS_WINDOWS) {
        // Windows have a leading slash like /C:/Users/pine
        return vscode_uri_1.default.parse(documentUri).path.slice(1);
    }
    else {
        return vscode_uri_1.default.parse(documentUri).path;
    }
}
exports.getFilePath = getFilePath;
function normalizeFileNameToFsPath(fileName) {
    return vscode_uri_1.default.file(fileName).fsPath;
}
exports.normalizeFileNameToFsPath = normalizeFileNameToFsPath;
//# sourceMappingURL=paths.js.map