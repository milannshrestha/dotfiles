import { IConnection } from 'vscode-languageserver';
/**
 * Service responsible for managing documents being syned through LSP
 * Todo - Switch to incremental sync
 */
export declare class DocumentService {
    private documents;
    constructor(conn: IConnection);
    getDocument(uri: string): import("vscode-languageserver-types").TextDocument | undefined;
    getAllDocuments(): import("vscode-languageserver-types").TextDocument[];
    readonly onDidChangeContent: import("vscode-languageserver").Event<import("vscode-languageserver-types").TextDocumentChangeEvent>;
    readonly onDidClose: import("vscode-languageserver").Event<import("vscode-languageserver-types").TextDocumentChangeEvent>;
}
