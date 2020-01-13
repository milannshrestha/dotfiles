import { LanguageModelCache } from '../../embeddedSupport/languageModelCache';
import { LanguageMode } from '../../embeddedSupport/languageModes';
import { VueDocumentRegions } from '../../embeddedSupport/embeddedSupport';
import * as ts from 'typescript';
import { VueInfoService } from '../../services/vueInfoService';
import { DependencyService } from '../../services/dependencyService';
import { IServiceHost } from '../../services/typescriptService/serviceHost';
export declare function getJavascriptMode(serviceHost: IServiceHost, documentRegions: LanguageModelCache<VueDocumentRegions>, workspacePath: string | undefined, vueInfoService?: VueInfoService, dependencyService?: DependencyService): Promise<LanguageMode>;
export declare function languageServiceIncludesFile(ls: ts.LanguageService, documentUri: string): boolean;
