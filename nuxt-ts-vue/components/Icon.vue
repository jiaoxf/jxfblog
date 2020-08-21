<template>
    <svg :class="svgClass" aria-hidden="true">
        <use :xlink:href="iconTag"></use>
        <!-- <use xlink:href="#icon-vue"></use> -->
    </svg>
</template>
<script lang="ts">
import { Component, Vue, Watch, Prop } from 'vue-property-decorator';

@Component
export default class Icon extends Vue {
    @Prop(String) private name?: string;
    @Prop(String) private className?: string;
    get iconTag(): string {
        return `#icon-${this.name}`;
    }
    get svgClass(): any {
      if(this.className) {
        return `icon ${this.className}`
      }else{
        return `icon`
      }
    }

}
</script>
<style lang="scss" scoped>
.icon{
  font-size: 22px;
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  color: #000;
}
</style>

