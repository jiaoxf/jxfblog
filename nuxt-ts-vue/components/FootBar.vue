<template>
  <div class='foot-bar'>
    <ul>
      <li>
        <a href="">
          <span>

          </span>
          <span>

          </span>
        </a>
      </li>
      <li>
        掘金
      </li>
      <li>
        facebook
      </li>
      <li>
        webchat
      </li>
    </ul>
  </div>
</template>
<script lang='ts'>
import Icon from '@/components/Icon.vue';
import { Component, Prop, Watch, Vue } from 'vue-property-decorator';
@Component({
  name: 'footbar',
  components: {
    Icon
  }
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
  .foot-bar{
    width: 70px;
    height: auto;
    box-sizing: border-box;
    padding-top: 6px;
    overflow: hidden;
    position: fixed;
    right: 0px;
    bottom: 18%;
    background-color: #fff;
    border-radius: 9px 0 0 9px;
    -webkit-transition: right .5s .2s;
    transition: right .5s .2s;
    z-index: 199;
    ul{
      li{

      }
    }
  }
</style>
