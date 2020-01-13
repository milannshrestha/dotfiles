"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const componentInfo_1 = require("./componentInfo");
function getChildComponents(tsModule, defaultExportType, checker, tagCasing = 'kebab') {
    const componentsSymbol = checker.getPropertyOfType(defaultExportType, 'components');
    if (!componentsSymbol || !componentsSymbol.valueDeclaration) {
        return undefined;
    }
    const componentsDeclaration = componentInfo_1.getLastChild(componentsSymbol.valueDeclaration);
    if (!componentsDeclaration) {
        return undefined;
    }
    if (componentsDeclaration.kind === tsModule.SyntaxKind.ObjectLiteralExpression) {
        const componentsType = checker.getTypeOfSymbolAtLocation(componentsSymbol, componentsDeclaration);
        const result = [];
        checker.getPropertiesOfType(componentsType).forEach(s => {
            if (!s.valueDeclaration) {
                return;
            }
            let componentName = s.name;
            if (tagCasing === 'kebab') {
                componentName = hyphenate(s.name);
            }
            let objectLiteralSymbol;
            if (s.valueDeclaration.kind === tsModule.SyntaxKind.PropertyAssignment) {
                objectLiteralSymbol =
                    checker.getSymbolAtLocation(s.valueDeclaration.initializer) || s;
            }
            else if (s.valueDeclaration.kind === tsModule.SyntaxKind.ShorthandPropertyAssignment) {
                objectLiteralSymbol = checker.getShorthandAssignmentValueSymbol(s.valueDeclaration) || s;
            }
            if (!objectLiteralSymbol) {
                return;
            }
            if (objectLiteralSymbol.flags & tsModule.SymbolFlags.Alias) {
                const definitionObjectLiteralSymbol = checker.getAliasedSymbol(objectLiteralSymbol);
                if (definitionObjectLiteralSymbol.valueDeclaration) {
                    const defaultExportExpr = componentInfo_1.getLastChild(definitionObjectLiteralSymbol.valueDeclaration);
                    if (!defaultExportExpr) {
                        return;
                    }
                    result.push({
                        name: componentName,
                        documentation: componentInfo_1.buildDocumentation(tsModule, definitionObjectLiteralSymbol, checker),
                        definition: {
                            path: definitionObjectLiteralSymbol.valueDeclaration.getSourceFile().fileName,
                            start: defaultExportExpr.getStart(undefined, true),
                            end: defaultExportExpr.getEnd()
                        },
                        defaultExportExpr: componentInfo_1.getObjectLiteralExprFromExportExpr(tsModule, defaultExportExpr)
                    });
                }
            }
        });
        return result;
    }
}
exports.getChildComponents = getChildComponents;
const hyphenateRE = /\B([A-Z])/g;
function hyphenate(word) {
    return word.replace(hyphenateRE, '-$1').toLowerCase();
}
//# sourceMappingURL=childComponents.js.map