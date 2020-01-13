import * as ts from 'typescript';
import { VueFileInfo } from '../../services/vueInfoService';
import { T_TypeScript } from '../../services/dependencyService';
export declare function getComponentInfo(tsModule: T_TypeScript, service: ts.LanguageService, fileFsPath: string, config: any): VueFileInfo | undefined;
export declare function analyzeDefaultExportExpr(tsModule: T_TypeScript, defaultExportExpr: ts.Node, checker: ts.TypeChecker): VueFileInfo;
export declare function getObjectLiteralExprFromExportExpr(tsModule: T_TypeScript, exportExpr: ts.Node): ts.Expression | undefined;
export declare function getLastChild(d: ts.Declaration): ts.Node | undefined;
export declare function buildDocumentation(tsModule: T_TypeScript, s: ts.Symbol, checker: ts.TypeChecker): string;
