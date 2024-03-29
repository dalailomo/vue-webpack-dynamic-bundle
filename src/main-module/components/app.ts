import { Vue, Component } from 'types-vue';
import { IShell } from 'main-module/interfaces';

@Component
export default class AppManager extends Vue {
    drawer: boolean = false;

    get submoduleRoutes(): any[] {
        return (this as any).shellInstances.reduce((acc: any, current: IShell) => {
            acc.push(current.getRoutes());

            return acc;
        }, []);
    }
}
