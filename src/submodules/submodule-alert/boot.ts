import routes from './routes';
import CounterModule from './store/counter.module';
import { SUBMODULE_NAME } from './consts';
import { IShell } from 'main-module/interfaces';

export default {
    install: (Shell: IShell) => {
        Shell.setSubmoduleName(SUBMODULE_NAME);
        Shell.addRoutes(routes);
        Shell.addStoreModule(CounterModule);
    }
};
