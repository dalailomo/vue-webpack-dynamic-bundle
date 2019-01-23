import { RouteConfig } from 'vue-router';
import { Module } from 'vuex';

export interface IShell {
    submoduleName: string;
    routes: RouteConfig[];
    setSubmoduleName: (submoduleName: string) => void;
    addRoutes: (routes: RouteConfig[]) => void;
    addStoreModule: (module: Module<any, any>) => void;
    getSubmoduleName: () => string;
    getRoutes: () => RouteConfig[];
}
