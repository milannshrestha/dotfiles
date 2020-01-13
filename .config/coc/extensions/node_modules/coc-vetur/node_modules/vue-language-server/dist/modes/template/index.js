"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const htmlMode_1 = require("./htmlMode");
const interpolationMode_1 = require("./interpolationMode");
class VueHTMLMode {
    constructor(tsModule, serviceHost, documentRegions, workspacePath, vueInfoService) {
        this.htmlMode = new htmlMode_1.HTMLMode(documentRegions, workspacePath, vueInfoService);
        this.vueInterpolationMode = new interpolationMode_1.VueInterpolationMode(tsModule, serviceHost);
    }
    getId() {
        return 'vue-html';
    }
    configure(c) {
        this.htmlMode.configure(c);
        this.vueInterpolationMode.configure(c);
    }
    queryVirtualFileInfo(fileName, currFileText) {
        return this.vueInterpolationMode.queryVirtualFileInfo(fileName, currFileText);
    }
    doValidation(document) {
        return this.htmlMode.doValidation(document).concat(this.vueInterpolationMode.doValidation(document));
    }
    doComplete(document, position) {
        return this.htmlMode.doComplete(document, position);
    }
    doHover(document, position) {
        const interpolationHover = this.vueInterpolationMode.doHover(document, position);
        return interpolationHover.contents.length !== 0 ? interpolationHover : this.htmlMode.doHover(document, position);
    }
    findDocumentHighlight(document, position) {
        return this.htmlMode.findDocumentHighlight(document, position);
    }
    findDocumentLinks(document, documentContext) {
        return this.htmlMode.findDocumentLinks(document, documentContext);
    }
    findDocumentSymbols(document) {
        return this.htmlMode.findDocumentSymbols(document);
    }
    format(document, range, formattingOptions) {
        return this.htmlMode.format(document, range, formattingOptions);
    }
    findReferences(document, position) {
        return this.vueInterpolationMode.findReferences(document, position);
    }
    findDefinition(document, position) {
        const interpolationDefinition = this.vueInterpolationMode.findDefinition(document, position);
        return interpolationDefinition.length > 0
            ? interpolationDefinition
            : this.htmlMode.findDefinition(document, position);
    }
    onDocumentRemoved(document) {
        this.htmlMode.onDocumentRemoved(document);
    }
    dispose() {
        this.htmlMode.dispose();
    }
}
exports.VueHTMLMode = VueHTMLMode;
//# sourceMappingURL=index.js.map