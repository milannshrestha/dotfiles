export declare function isVueFile(path: string): boolean;
/**
 * If the path ends with `.vue.ts`, it's a `.vue` file pre-processed by Vetur
 * to be used in TS Language Service
 */
export declare function isVirtualVueFile(path: string): boolean;
/**
 * If the path ends with `.vue.template`, it's a `.vue` file's template part
 * pre-processed by Vetur to calculate template diagnostics in TS Language Service
 */
export declare function isVirtualVueTemplateFile(path: string): boolean;
