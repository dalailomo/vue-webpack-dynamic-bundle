import { Vue, Component } from 'types-vue';
import { IShell } from 'main-module/interfaces';

@Component
export default class Home extends Vue {
    get loadedSubmodules(): any[] {
        return (this as any).shellInstances.reduce((acc: any, current: IShell) => {
            acc.push({ name: current.getSubmoduleName(), routes: current.getRoutes() });

            return acc;
        }, []);
    }
}
