<template>
  <div class='detail-box'>
    <div class="detail-content">
      <div class="detail-header">
        <div class="head-portrait">
          头像
        </div>
        <div class="detail-name">
          秃了就变强了
        </div>
        <div class="detail-time">
          2020年10月10日
        </div>
      </div>
      <client-only>
        <!-- <mavon-editor codeStyle="monokai-sublime"/> -->
      </client-only>
    </div>

    <!-- <ToolBar /> -->
  </div>
</template>
<script lang='ts'>
import { Component, Prop, Watch, Vue } from 'vue-property-decorator';
import ToolBar from '@/components/ToolBar.vue';
@Component({
  name: 'detail-box',
  components: {
    ToolBar
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
  .detail-box{
    .detail-content{
      padding: 0 1.5rem;
      .detail-header{
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        padding: 1.5rem 0;
        .head-portrait{
          width: 4rem;
          height: 4rem;
        }
        .detail-name{
          font-size: 1.2rem;
          font-weight: 700;
        }
        .detail-time{
          font-size: 0.8rem;
          color: #909090;
          letter-spacing:1px;
        }
      }
    }

  }
</style>
