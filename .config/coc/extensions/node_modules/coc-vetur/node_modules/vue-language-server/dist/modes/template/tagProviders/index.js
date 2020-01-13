"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const htmlTags_1 = require("./htmlTags");
const vueTags_1 = require("./vueTags");
const routerTags_1 = require("./routerTags");
const externalTagProviders_1 = require("./externalTagProviders");
var componentInfoTagProvider_1 = require("./componentInfoTagProvider");
exports.getComponentTags = componentInfoTagProvider_1.getComponentInfoTagProvider;
const ts = require("typescript");
const fs = require("fs");
const path_1 = require("path");
const nuxtTags_1 = require("./nuxtTags");
exports.allTagProviders = [
    htmlTags_1.getHTML5TagProvider(),
    vueTags_1.getVueTagProvider(),
    routerTags_1.getRouterTagProvider(),
    externalTagProviders_1.elementTagProvider,
    externalTagProviders_1.onsenTagProvider,
    externalTagProviders_1.bootstrapTagProvider,
    externalTagProviders_1.buefyTagProvider,
    externalTagProviders_1.gridsomeTagProvider
];
function getTagProviderSettings(workspacePath) {
    const settings = {
        html5: true,
        vue: true,
        router: false,
        element: false,
        onsen: false,
        bootstrap: false,
        buefy: false,
        vuetify: false,
        quasar: false,
        'quasar-framework': false,
        nuxt: false,
        gridsome: false
    };
    if (!workspacePath) {
        return settings;
    }
    try {
        const packagePath = ts.findConfigFile(workspacePath, ts.sys.fileExists, 'package.json');
        if (!packagePath) {
            return settings;
        }
        const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf-8'));
        const dependencies = packageJson.dependencies || {};
        const devDependencies = packageJson.devDependencies || {};
        if (dependencies['vue-router']) {
            settings['router'] = true;
        }
        if (dependencies['element-ui']) {
            settings['element'] = true;
        }
        if (dependencies['vue-onsenui']) {
            settings['onsen'] = true;
        }
        if (dependencies['bootstrap-vue']) {
            settings['bootstrap'] = true;
        }
        if (dependencies['buefy']) {
            settings['buefy'] = true;
        }
        if (dependencies['vuetify'] || devDependencies['vuetify']) {
            settings['vuetify'] = true;
        }
        if (dependencies['@nuxtjs/vuetify'] || devDependencies['@nuxtjs/vuetify']) {
            dependencies['vuetify'] = true;
        }
        // Quasar v1+:
        if (dependencies['quasar']) {
            settings['quasar'] = true;
        }
        // Quasar pre v1 on non quasar-cli:
        if (dependencies['quasar-framework']) {
            settings['quasar-framework'] = true;
        }
        // Quasar pre v1 on quasar-cli:
        if (devDependencies['quasar-cli']) {
            // pushing dependency so we can check it
            // and enable Quasar later below in the for()
            dependencies['quasar-framework'] = '^0.0.17';
        }
        if (dependencies['nuxt'] ||
            dependencies['nuxt-legacy'] ||
            dependencies['nuxt-edge'] ||
            dependencies['nuxt-ts'] ||
            dependencies['nuxt-ts-edge']) {
            const nuxtTagProvider = nuxtTags_1.getNuxtTagProvider(workspacePath);
            if (nuxtTagProvider) {
                settings['nuxt'] = true;
                exports.allTagProviders.push(nuxtTagProvider);
            }
        }
        if (dependencies['gridsome']) {
            settings['gridsome'] = true;
        }
        for (const dep in dependencies) {
            const runtimePkgPath = ts.findConfigFile(workspacePath, ts.sys.fileExists, path_1.join('node_modules', dep, 'package.json'));
            if (!runtimePkgPath) {
                continue;
            }
            const runtimePkg = JSON.parse(fs.readFileSync(runtimePkgPath, 'utf-8'));
            if (!runtimePkg) {
                continue;
            }
            const tagProvider = externalTagProviders_1.getRuntimeTagProvider(workspacePath, runtimePkg);
            if (!tagProvider) {
                continue;
            }
            exports.allTagProviders.push(tagProvider);
            settings[dep] = true;
        }
    }
    catch (e) { }
    return settings;
}
exports.getTagProviderSettings = getTagProviderSettings;
function getEnabledTagProviders(tagProviderSetting) {
    return exports.allTagProviders.filter(p => tagProviderSetting[p.getId()] !== false);
}
exports.getEnabledTagProviders = getEnabledTagProviders;
//# sourceMappingURL=index.js.map