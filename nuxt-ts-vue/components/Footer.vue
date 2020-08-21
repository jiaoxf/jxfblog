<template>
  <footer class="foot-content">
    <div class="foot-text">
    </div>
    <div class="foot-warning">
      <p>www.jxfblog.com</p>
      <div class="record-info">
        <span class="record-icon"></span>&nbsp;
        <span>京ICP备19040125号-1</span>
      </div>
    </div>
  </footer>
</template>
<script lang='ts'>
import { Component, Prop, Watch, Vue } from 'vue-property-decorator';
@Component({
  name: 'foot',
  components: {

  },
})
export default class extends Vue {
  private isShow: boolean = true;
  @Prop({ default: '1' }) private msg!: string;
  private methods(x:any, y: any) {
    console.log(x, y);
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
  .foot-content{
    background: #14161E;
    /* min-height: 200px; */
    min-height: 100px;
    z-index: 10001;
    padding-top: 30px;
    .foot-warning{
      display: flex;
      flex-direction: column;
      line-height: 16px;
      font-size: 12px;
      letter-spacing: .7px;
      color: #fff;
      opacity: .5;
      max-width: 860px;
      margin: 0 auto;
      text-align: center;
      .record-info{
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 10px auto;
        .record-icon{
          display: inline-block;
          width: 1rem;
          height: 1rem;
          background:url('../assets/record.png') no-repeat center;
        }
      }
    }
  }

</style>
