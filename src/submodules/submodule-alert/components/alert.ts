import { Vue, Component, MapGetter, MapAction } from 'types-vue';
import { STORE_MODULE_NAMESPACE } from '../consts';

@Component
export default class AlertComponent extends Vue {
    @MapGetter({ namespace: STORE_MODULE_NAMESPACE })
    counter: number;

    @MapAction({ namespace: STORE_MODULE_NAMESPACE })
    incr: Function;

    @MapAction({ namespace: STORE_MODULE_NAMESPACE })
    decr: Function;

    paragraph: string = 'Alert management section';
}
