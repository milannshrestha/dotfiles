import { LanguageMode } from '../../embeddedSupport/languageModes';
import { Diagnostic, TextDocument, Position, MarkedString, Range, Location } from 'vscode-languageserver-types';
import { IServiceHost } from '../../services/typescriptService/serviceHost';
import { T_TypeScript } from '../../services/dependencyService';
export declare class VueInterpolationMode implements LanguageMode {
    private tsModule;
    private serviceHost;
    private config;
    constructor(tsModule: T_TypeScript, serviceHost: IServiceHost);
    getId(): string;
    configure(c: any): void;
    queryVirtualFileInfo(fileName: string, currFileText: string): {
        source: string;
        sourceMapNodesString: string;
    };
    doValidation(document: TextDocument): Diagnostic[];
    doHover(document: TextDocument, position: Position): {
        contents: MarkedString[];
        range?: Range;
    };
    findDefinition(document: TextDocument, position: Position): Location[];
    findReferences(document: TextDocument, position: Position): Location[];
    onDocumentRemoved(): void;
    dispose(): void;
}
