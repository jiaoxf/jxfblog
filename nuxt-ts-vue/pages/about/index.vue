<template>
  <div class='about-me'>
    <div class="card-me shadow">
      <div class="head-portrait"></div>
      <div class="head-name">秃了就变强了</div>
      <div class="head-aphorism">
        This is the way!
      </div>
      <div class="head-link">
        <a href="https://github.com/jiaoxf" target="_black">
          <Icon name="github" />
        </a>
        <a>
          <Icon name="big-WeChat" className="iconStyle"/>
        </a>
        <a href="https://juejin.im/user/3051900007097005" target="_black">
          <Icon name="juejin"/>
        </a>
        <a>
          <Icon name="xinfeng" className="xinfengStyle"/>
        </a>
      </div>

    </div>
  </div>
</template>
<script lang='ts'>
import { Component, Prop, Watch, Vue } from 'vue-property-decorator';
import Icon from '@/components/Icon.vue'
@Component({
  name: 'name',
  components: {
    Icon
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
  .card-me{
    display: flex;
    justify-content: center;
    .head-portrait{
      display: inline-block;
      position: relative;
      background-size: cover;
      background-color: #eee;
      margin: 0 auto;
      flex: 0 0 auto;
      width: 6rem;
      height: 6rem;
      background-color: #f9f9f9;
      border-radius: 50%;
    }
    .head-name{
      margin: 1rem auto;
      padding: 0;
      font-size: 1.167rem;
      font-weight: 600;
      line-height: 1.2;
      color: #000;
    }
    .head-aphorism{
      font-size: 2rem;
      margin: 1rem auto;
    }
    .head-link{
      display: flex;
      /* justify-content: space-around; */
      align-items: center;
      a{
        margin:0 1rem;
      }
    }
  }
  .iconStyle{
    color: #389e0d;
  }
  .xinfengStyle{
    color: #fadb14;
  }
  .card-me {
      flex-direction: column;
      align-items: center;
      padding: 2rem 2rem 1.67rem;
  }
  @media (max-width: 600px){
    .card-me {
        flex-direction: column;
        align-items: center;
        padding: 2rem 2rem 1.67rem;
    }
  }

</style>
