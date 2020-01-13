import { LanguageModelCache } from '../../embeddedSupport/languageModelCache';
import { TextDocument, Position, Range, FormattingOptions } from 'vscode-languageserver-types';
import { LanguageMode } from '../../embeddedSupport/languageModes';
import { VueDocumentRegions } from '../../embeddedSupport/embeddedSupport';
import { DocumentContext } from '../../types';
import { VueInfoService } from '../../services/vueInfoService';
export declare class HTMLMode implements LanguageMode {
    private vueInfoService?;
    private tagProviderSettings;
    private enabledTagProviders;
    private embeddedDocuments;
    private vueDocuments;
    private config;
    private lintEngine;
    constructor(documentRegions: LanguageModelCache<VueDocumentRegions>, workspacePath: string | undefined, vueInfoService?: VueInfoService | undefined);
    getId(): string;
    configure(c: any): void;
    doValidation(document: TextDocument): import("vscode-languageserver-types").Diagnostic[];
    doComplete(document: TextDocument, position: Position): import("vscode-languageserver-types").CompletionList;
    doHover(document: TextDocument, position: Position): import("vscode-languageserver-types").Hover;
    findDocumentHighlight(document: TextDocument, position: Position): import("vscode-languageserver-types").DocumentHighlight[];
    findDocumentLinks(document: TextDocument, documentContext: DocumentContext): import("vscode-languageserver-types").DocumentLink[];
    findDocumentSymbols(document: TextDocument): import("vscode-languageserver-types").SymbolInformation[];
    format(document: TextDocument, range: Range, formattingOptions: FormattingOptions): import("vscode-languageserver-types").TextEdit[];
    findDefinition(document: TextDocument, position: Position): import("vscode-languageserver-types").Definition;
    onDocumentRemoved(document: TextDocument): void;
    dispose(): void;
}
