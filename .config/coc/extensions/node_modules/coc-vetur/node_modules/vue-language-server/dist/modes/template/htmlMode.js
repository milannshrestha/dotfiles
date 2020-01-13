"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const languageModelCache_1 = require("../../embeddedSupport/languageModelCache");
const htmlCompletion_1 = require("./services/htmlCompletion");
const htmlHover_1 = require("./services/htmlHover");
const htmlHighlighting_1 = require("./services/htmlHighlighting");
const htmlLinks_1 = require("./services/htmlLinks");
const htmlSymbolsProvider_1 = require("./services/htmlSymbolsProvider");
const htmlFormat_1 = require("./services/htmlFormat");
const htmlParser_1 = require("./parser/htmlParser");
const htmlValidation_1 = require("./services/htmlValidation");
const htmlDefinition_1 = require("./services/htmlDefinition");
const tagProviders_1 = require("./tagProviders");
const tagProviders_2 = require("./tagProviders");
const componentInfoTagProvider_1 = require("./tagProviders/componentInfoTagProvider");
class HTMLMode {
    constructor(documentRegions, workspacePath, vueInfoService) {
        this.vueInfoService = vueInfoService;
        this.config = {};
        this.lintEngine = htmlValidation_1.createLintEngine();
        this.tagProviderSettings = tagProviders_1.getTagProviderSettings(workspacePath);
        this.enabledTagProviders = tagProviders_2.getEnabledTagProviders(this.tagProviderSettings);
        this.embeddedDocuments = languageModelCache_1.getLanguageModelCache(10, 60, document => documentRegions.refreshAndGet(document).getSingleLanguageDocument('vue-html'));
        this.vueDocuments = languageModelCache_1.getLanguageModelCache(10, 60, document => htmlParser_1.parseHTMLDocument(document));
    }
    getId() {
        return 'html';
    }
    configure(c) {
        this.tagProviderSettings = _.assign(this.tagProviderSettings, c.html.suggest);
        this.enabledTagProviders = tagProviders_2.getEnabledTagProviders(this.tagProviderSettings);
        this.config = c;
    }
    doValidation(document) {
        const embedded = this.embeddedDocuments.refreshAndGet(document);
        return htmlValidation_1.doESLintValidation(embedded, this.lintEngine);
    }
    doComplete(document, position) {
        const embedded = this.embeddedDocuments.refreshAndGet(document);
        const tagProviders = [...this.enabledTagProviders];
        const info = this.vueInfoService ? this.vueInfoService.getInfo(document) : undefined;
        if (info && info.componentInfo.childComponents) {
            tagProviders.push(componentInfoTagProvider_1.getComponentInfoTagProvider(info.componentInfo.childComponents));
        }
        return htmlCompletion_1.doComplete(embedded, position, this.vueDocuments.refreshAndGet(embedded), tagProviders, this.config.emmet, info);
    }
    doHover(document, position) {
        const embedded = this.embeddedDocuments.refreshAndGet(document);
        const tagProviders = [...this.enabledTagProviders];
        return htmlHover_1.doHover(embedded, position, this.vueDocuments.refreshAndGet(embedded), tagProviders);
    }
    findDocumentHighlight(document, position) {
        return htmlHighlighting_1.findDocumentHighlights(document, position, this.vueDocuments.refreshAndGet(document));
    }
    findDocumentLinks(document, documentContext) {
        return htmlLinks_1.findDocumentLinks(document, documentContext);
    }
    findDocumentSymbols(document) {
        return htmlSymbolsProvider_1.findDocumentSymbols(document, this.vueDocuments.refreshAndGet(document));
    }
    format(document, range, formattingOptions) {
        return htmlFormat_1.htmlFormat(document, range, this.config.vetur.format);
    }
    findDefinition(document, position) {
        const embedded = this.embeddedDocuments.refreshAndGet(document);
        const info = this.vueInfoService ? this.vueInfoService.getInfo(document) : undefined;
        return htmlDefinition_1.findDefinition(embedded, position, this.vueDocuments.refreshAndGet(embedded), info);
    }
    onDocumentRemoved(document) {
        this.vueDocuments.onDocumentRemoved(document);
    }
    dispose() {
        this.vueDocuments.dispose();
    }
}
exports.HTMLMode = HTMLMode;
//# sourceMappingURL=htmlMode.js.map