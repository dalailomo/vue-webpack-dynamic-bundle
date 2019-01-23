import router from './router';
import { Module } from 'vuex';
import { RouteConfig } from 'vue-router';
import store from './store';
import { IShell } from './interfaces';

export const instances = [] as IShell[];

export class Shell implements IShell {
    submoduleName: string;
    routes: RouteConfig[] = [];

    setSubmoduleName(submoduleName: string) {
        this.submoduleName = submoduleName;
    }

    addRoutes(routes: RouteConfig[]) {
        router.addRoutes(routes);

        routes.forEach((route: RouteConfig) => this.routes.push(route));
    }

    addStoreModule(module: Module<any, any>) {
        store.registerModule(this.submoduleName, module);
    }

    getSubmoduleName() {
        return this.submoduleName;
    }

    getRoutes() {
        return this.routes;
    }

    /// ...the rest of the shell stuff
}
