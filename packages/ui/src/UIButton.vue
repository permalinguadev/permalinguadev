<template>
  <button :disabled="isDisabled" class="ui-button">{{ message }}</button>
</template>

<script lang="ts">
import { Options, Vue, Prop } from 'vue-property-decorator'

@Options({ name: 'UIButton', emits: 'click' })
export default class UIButton extends Vue {
  @Prop({ default: false })
  isDisabled!: boolean

  @Prop({ default: 'hello' })
  message!: { type: String; required: true }
}
</script>

<style scoped lang="scss">
.ui-button {
  border: none;
  border-radius: 10px;
  box-sizing: border-box;
  padding: 0.5em 2em;
  background-color: rgb(255, 0, 0);
  color: white;
  font-weight: bold;
  transition: all 0.2s;
  &:hover {
    transform: scale(1.1, 1.1);
  }
}
</style>
