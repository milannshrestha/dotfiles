import { LanguageModelCache } from '../../embeddedSupport/languageModelCache';
import { LanguageMode } from '../../embeddedSupport/languageModes';
import { VueDocumentRegions } from '../../embeddedSupport/embeddedSupport';
export declare function getCSSMode(documentRegions: LanguageModelCache<VueDocumentRegions>): LanguageMode;
export declare function getPostCSSMode(documentRegions: LanguageModelCache<VueDocumentRegions>): LanguageMode;
export declare function getSCSSMode(documentRegions: LanguageModelCache<VueDocumentRegions>): LanguageMode;
export declare function getLESSMode(documentRegions: LanguageModelCache<VueDocumentRegions>): LanguageMode;
