import { Module, VuexModule, Mutation, Getter, Action } from 'types-vue';
import { ActionContext } from 'vuex';

@Module({ namespaced: true })
export default class CounterModule extends VuexModule {
    _counter: number = 0;

    @Getter()
    counter(): number {
        return this._counter;
    }

    @Mutation()
    increment(value: number): void {
        this._counter += value;
    }

    @Mutation()
    decrement(value: number): void {
        this._counter -= value;
    }

    @Action({ commit: 'increment' })
    incr(value: number): number {
        if (value < 0) {
            return 0;
        }

        return value;
    }

    @Action({ commit: 'decrement', useContext: true })
    decr(context: ActionContext<any, any>, value: number): number {
        if (value < 0) {
            return 0;
        }

        return value;
    }
}
