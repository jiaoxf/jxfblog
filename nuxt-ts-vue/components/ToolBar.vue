<template>
  <div class="tool-bar">
    <div class="tool-box">
      <span class="icon-round">
        <Icon name="dianzan"/>
      </span>
      <p>点赞</p>
    </div>
    <div class="tool-box">
      <Icon name="dianzan"/>
      <p>收藏</p>
    </div>
    <div class="tool-box">
      <Icon name="dianzan"/>
      <p>评价</p>
    </div>
    <div class="tool-box">
      <Icon name="dianzan"/>
      <p>转发</p>
    </div>
  </div>
</template>
<script lang='ts'>
import { Component, Prop, Watch, Vue } from 'vue-property-decorator';
import Icon from '@/components/Icon.vue';
@Component({
  name: 'tool-bar',
  components: {
    Icon,
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
}
</script>
<style lang='scss' scoped>
  //@import url(); 引入公共css类
.tool-bar{
  height: 4rem;
  background: #ccc;
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content:space-around;
  .tool-box{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding:.5rem;
    width: 25%;
  }
  .icon-round{

  }
}
</style>
