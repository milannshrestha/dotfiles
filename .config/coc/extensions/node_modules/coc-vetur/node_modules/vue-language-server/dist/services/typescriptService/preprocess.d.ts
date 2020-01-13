import * as ts from 'typescript';
import { T_TypeScript } from '../../services/dependencyService';
export declare function parseVueScript(text: string): string;
export declare function parseVueTemplate(text: string): string;
export declare function createUpdater(tsModule: T_TypeScript): {
    createLanguageServiceSourceFile: (fileName: string, scriptSnapshot: ts.IScriptSnapshot, scriptTarget: ts.ScriptTarget, version: string, setNodeParents: boolean, scriptKind?: ts.ScriptKind | undefined) => ts.SourceFile;
    updateLanguageServiceSourceFile: (sourceFile: ts.SourceFile, scriptSnapshot: ts.IScriptSnapshot, version: string, textChangeRange: ts.TextChangeRange, aggressiveChecks?: boolean | undefined) => ts.SourceFile;
};
/**
 * Wrap render function with component options in the script block
 * to validate its types
 */
export declare function injectVueTemplate(tsModule: T_TypeScript, sourceFile: ts.SourceFile, renderBlock: ts.Expression[], scriptSrc?: string): void;
