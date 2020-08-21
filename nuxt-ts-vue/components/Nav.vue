<template>
  <div>
    <nav class="header">
        <ul>
            <li v-for="(item, i) in navList" :key="i">
                <!-- <a :href="item.url">{{ item.url }}</a> -->
                <nuxt-link :to="item.url">{{ item.url }}</nuxt-link>
            </li>
        </ul>
    </nav>
    <nav class="nav-left" :class="navShow ? 'nav-animation': 'nav-animation-none'">
      <div class="router-list">
        <ul>
            <li v-for="(item, i) in navList" @click="clickNav">
              <nuxt-link :to="item.url" >
                <div class="icon-box">
                  <Icon :name="item.icon"/>
                </div>
                <div class="router-title">
                  {{ item.name }}
                </div>
              </nuxt-link>
            </li>
        </ul>
      </div>
    </nav>
  </div>
</template>
<script lang='ts'>
import Icon from '@/components/Icon.vue';
import { Component, Prop, Watch, Vue } from 'vue-property-decorator';
import { NavList } from '@/types/index';
@Component({
  name: 'navbar',
  components: {
    Icon
  },
})
export default class extends Vue {
  private isShow: boolean = true;
  private navList: NavList[] = [
      {
          title: 'Article',
          url: 'article',
          name: '文章',
          icon: 'wenzhangguanli'
      },
      {
          title: 'Frame',
          url: 'frame',
          name: '框架',
          icon: 'vue'
      },
      {
          title: 'Reprinted',
          url: 'reprinted',
          name: '转载',
          icon: 'wenzhangshoucang'
      },
      {
          title: 'Github',
          url: 'github',
          name: 'Github',
          icon: 'github'
      },
      {
          title: 'About',
          url: 'about',
          name: '关于',
          icon: 'guanyuwomen'
      },
  ]
  @Prop({ default: '1' }) private msg!: string;
  @Prop({ default: false }) private navShow!: boolean;
  private methods(x:any, y: any) {
    console.log(x, y);
  }
  private clickNav(){
    // alert(1)
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
  .header{
      position: absolute;
      background:rgba(39,40,72, 0.7);
			top: 70px;
      width: 80%;
      margin: 0 10%;
      height: 80px;
			color: #fff;
			z-index: 99;
			padding: 0 40px 0 40px;
      border-radius: 20px;
      box-shadow: 3px 3px 6px 3px rgba(0, 0, 0, .3);
      overflow: hidden;
      ul{
          display: flex;
          align-items: center;
          justify-content: space-around;
          height: 100%;
          width: 100%;
          li{
            a{
              display: inline-block;
              font-size: 20px;
              cursor: pointer;
              color: #fff;
              letter-spacing: 1px;
              transition: all .2s ease;
              width: 100px;
              height: 50px;
              line-height: 50px;
              text-align: center;
              border-radius:10px;
              &:hover{
                font-weight: 500;
                color: rgba(255, 87, 48, 1);
                /* background-color: rgba(255, 87, 48, 0.4); */
                /* box-shadow: 0 0 2px rgba(0,0,0,0.8)8 */
              }
            }

          }
      }
  }
  .nav-left{
    position: fixed;
    height: 100vh;
    top: 0px;
    max-height: calc(100% - 0px);
    transform: translateX(0%);
    width: 256px;
    background-color: #fff;
    border-color: rgb(255, 255, 255);
    display: flex;
    flex-direction: column;
    left: 0;
    max-width: 100%;
    overflow: hidden;
    pointer-events: auto;
    top: 0;
    transition-duration: 1s;
    transition-timing-function: cubic-bezier(.4,0,.2,1);
    will-change: transform;
    transition-property: transform,visibility,width;
    z-index:300;
    .router-list{
      margin-top:100px;
      /* padding-left: 8px; */
      /* padding-right: 8px; */
      ul{
        flex: 0 1 auto;
        position: relative;
        max-width: 100%;
        transition: .3s cubic-bezier(.25,.8,.5,1);
        li{
          &:hover{
            background:#ccc;
          }
          a{
            background: #fff;
            padding: 0px 0px 0px 60px;
            margin-bottom:4px;
            align-items: center;
            display: flex;
            flex: 1 1 100%;
            letter-spacing: normal;
            min-height: 42px;
            outline: none;
            padding: 0 16px;
            position: relative;
            text-decoration: none;
            padding: 0 0 0 60px;
            &:hover{
              background: #f0f0f0;
            }
            .icon-box{
              display: inline-flex;
              min-width: 24px;
              height: 24px;
              margin-top: 8px;
              margin-bottom: 8px;
              margin-right: 16px;
              /* margin:16px 0; */
              align-items: center;
              align-self: center;
              color:#000;

            }
            .router-title{
              color: #000;
              align-items: center;
              align-self: center;
              display: flex;
              flex-wrap: wrap;
              flex: 1 1;
              overflow: hidden;
              padding: 8px 0;
            }
          }
        }
      }
    }
  }
  .nav-animation{
    transform: translateX(0%);
  }
  .nav-animation-none{
    transform: translateX(-100%);
  }
</style>
