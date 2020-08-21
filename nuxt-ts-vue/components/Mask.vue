<template>
  <div class='mask' v-show="maskShow" @click="closeMenu">

  </div>
</template>
<script lang='ts'>
import { Component, Prop, Watch, Vue } from 'vue-property-decorator';
@Component({
  components: {

  },
})
export default class extends Vue {
  private isShow: boolean = true;
  @Prop({ default: false }) private maskShow!: boolean;
  private methods(x:any, y: any) {
    console.log(x, y);
  }
  private closeMenu(){
    this.$store.commit('closeMenu')
  }
  mounted() {
  // Do something
  }
  @Watch('someThing')
  getVisible(newVal:string, oldVal:string) :void {
    console.log('newVal', newVal, 'oldVal', oldVal)
  };
}
</script>
<style lang='scss' scoped>
  //@import url(); 引入公共css类
  .mask{
    opacity: 0.46;
    background-color: rgb(33, 33, 33);
    border-color: rgb(33, 33, 33);
    border-radius: inherit;
    bottom: 0;
    height: 100%;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    /* transition: inherit; */
    width: 100%;
    will-change: opacity;
    z-index: 200;
    transition: 2s cubic-bezier(.25,.8,.5,1),z-index 1ms;
  }
</style>
