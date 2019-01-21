import { Vue, Component } from 'types-vue';

@Component
export default class AlertComponent extends Vue {
    paragraph: string = 'Hello, I am a paragraph from component property';
}
