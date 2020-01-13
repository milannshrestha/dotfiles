import { DocumentColorParams, DocumentFormattingParams, DocumentLinkParams, IConnection, TextDocumentPositionParams, ColorPresentationParams, InitializeParams, ServerCapabilities, CodeActionParams } from 'vscode-languageserver';
import { ColorInformation, CompletionItem, CompletionList, Definition, Diagnostic, DocumentHighlight, DocumentLink, DocumentSymbolParams, Hover, Location, SignatureHelp, SymbolInformation, TextDocument, TextEdit, ColorPresentation } from 'vscode-languageserver-types';
import { RefactorAction } from '../types';
export declare class VLS {
    private lspConnection;
    private workspacePath;
    private documentService;
    private vueInfoService;
    private dependencyService;
    private languageModes;
    private pendingValidationRequests;
    private validationDelayMs;
    private validation;
    private documentFormatterRegistration;
    constructor(lspConnection: IConnection);
    init(params: InitializeParams): Promise<{
        capabilities: {};
    } | undefined>;
    listen(): void;
    private setupConfigListeners;
    private setupLSPHandlers;
    private setupCustomLSPHandlers;
    private setupDynamicFormatters;
    private setupFileChangeListeners;
    configure(config: any): void;
    /**
     * Custom Notifications
     */
    displayInfoMessage(msg: string): void;
    displayWarningMessage(msg: string): void;
    displayErrorMessage(msg: string): void;
    /**
     * Language Features
     */
    onDocumentFormatting({ textDocument, options }: DocumentFormattingParams): TextEdit[];
    private toSimpleRange;
    onCompletion({ textDocument, position }: TextDocumentPositionParams): CompletionList;
    onCompletionResolve(item: CompletionItem): CompletionItem;
    onHover({ textDocument, position }: TextDocumentPositionParams): Hover;
    onDocumentHighlight({ textDocument, position }: TextDocumentPositionParams): DocumentHighlight[];
    onDefinition({ textDocument, position }: TextDocumentPositionParams): Definition;
    onReferences({ textDocument, position }: TextDocumentPositionParams): Location[];
    onDocumentLinks({ textDocument }: DocumentLinkParams): DocumentLink[];
    onDocumentSymbol({ textDocument }: DocumentSymbolParams): SymbolInformation[];
    onDocumentColors({ textDocument }: DocumentColorParams): ColorInformation[];
    onColorPresentations({ textDocument, color, range }: ColorPresentationParams): ColorPresentation[];
    onSignatureHelp({ textDocument, position }: TextDocumentPositionParams): SignatureHelp | null;
    onCodeAction({ textDocument, range, context }: CodeActionParams): import("vscode-languageserver-types").Command[];
    getRefactorEdits(refactorAction: RefactorAction): import("vscode-languageserver-types").Command | undefined;
    private triggerValidation;
    cleanPendingValidation(textDocument: TextDocument): void;
    validateTextDocument(textDocument: TextDocument): void;
    doValidate(doc: TextDocument): Diagnostic[];
    removeDocument(doc: TextDocument): void;
    dispose(): void;
    readonly capabilities: ServerCapabilities;
}
