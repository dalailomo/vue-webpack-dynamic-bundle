import { Vue, Component } from 'types-vue';

@Component
export default class UserComponent extends Vue {
    paragraph: string = 'Hello, I am a paragraph from USER component property';
}
