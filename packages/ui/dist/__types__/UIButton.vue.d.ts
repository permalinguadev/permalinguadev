import { Vue } from 'vue-property-decorator';
declare class UIButton extends Vue {
    isDisabled: boolean;
    message: {
        type: string;
        required: true;
    };
}
declare const _sfc_main: typeof UIButton;
export default _sfc_main;
