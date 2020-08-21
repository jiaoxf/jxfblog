<template>
  <div class=''>
    这是文章页面
    <ArticleBlock />
    <ArticleBlock />
    <ArticleBlock />
    <ArticleBlock />
  </div>
</template>
<script lang='ts'>
import { Component, Prop, Watch, Vue } from 'vue-property-decorator';
import ArticleBlock from '@/components/ArticleBlock.vue'
import axios from 'axios'
@Component({
  name: 'articlePage',
  components: {
    ArticleBlock
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
    this.requestJson()
  }
  @Watch('someThing')
  getVisible(newVal:string, oldVal:string) :void {
    console.log('newVal', newVal, 'oldVal', oldVal)
  };
  private async requestJson(){
    await axios.get('/api/api.json', {
      params: {}
    }).then(
      res => {
        console.log(res);
      }
    ).catch(
      error => {
          console.log(error);
      }
    )

  }
}
</script>
<style lang='scss' scoped>
  //@import url(); 引入公共css类
</style>
