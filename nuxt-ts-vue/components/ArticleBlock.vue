<template>
    <div>
        <article class="art-card">
          <a @click="article(1)" rel="noopener noreferrer">
            <div class="j-card">
              <div class="j-card-img">
                  <img src="https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*c88yR4TO1z8AAAAAAAAAAABkARQnAQ" alt="文章图片">
              </div>
              <div class="j-card-text">
                <div class="j-card-detail">
                  <div class="j-card-title">
                    这是一个title，请看它的样式登记卡加速度快接口类就
                  </div>
                  <div class="j-card-content">
                    这是文章的内容客家话打卡机好客山东哈萨克汇顶科技啊好蝴蝶结卡刷卡机啊但是讲得好击杀的块级 回到家卡号见客户就开大会尽快哈大师课教案八度空间安保大家还看不到看见哈珀的空间拿不到撒尽可能把大家开始八年级拷贝
                  </div>
                  <div class="j-card-info">
                      <!-- <v-btn class="mx-2" fab dark x-small color="green">
                        <v-icon dark>mdi-heart</v-icon>
                      </v-btn> -->
                      <Icon name="dianzan"/>
                      <span class="text-item votes-num">1</span>
                      <span class="text-item author-name">焦学峰</span>
                      <span class="text-item" style="fontSize:14px;"><span class="dot">·</span>2020-05-05</span>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </article>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
// import FeedMeta from '@/components/FeedMeta.vue';
import Icon from '@/components/Icon.vue';

@Component({
    components: {
        // FeedMeta,
    },
})

export default class ArticleBlock extends Vue {
    private isLoading: boolean = true;
    private elevations: number[] = [6, 12, 18];
    private content: string = '# 欢迎使用 Markdown在线编辑器 MdEditor**Markdown是一种轻量级的「标记语言」**![markdown](https://www.mdeditor.com/images/logos/markdown.png "markdown")Markdown是一种可以使用普通文本编辑器编写的标记语言，通过简单的标记语法，它可以使普通文本内容具有一定的格式。它允许人们使用易读易写的纯文本格式编写文档，然后转换成格式丰富的HTML页面，Markdown文件的后缀名便是“.md”## MdEditor是一个在线编辑Markdown文档的编辑器'
    private article(id: number) {
      this.$router.push(`detail/${id}`)
    }

}
</script>
<style lang="scss" scoped>
.article-item{
    .card-link{
        text-decoration:none
    }
    .card-box{
        border-radius: 12px;
        border-radius: 20px;
        background: #ffffff;
        box-shadow:  20px 20px 60px #d9d9d9,
                    -20px -20px 60px #ffffff;
    }

    .article-title{
        display: inline;
        font-weight: 500;
        font-size: 18px;
        line-height: 28px;
        color: #212121;
        position: relative;
        vertical-align: middle;
    }
    .description{
        .line-clamp{
        margin-bottom: 15px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        line-height: 1.5;
        color: #888;
        font-size: 15px;
        font-family: -apple-system,BlinkMacSystemFont,Helvetica Neue,PingFang SC,Microsoft YaHei,Source Han Sans SC,Noto Sans CJK SC,WenQuanYi Micro Hei,sans-serif;
        }
    }

}
.art-card{
  display: block;
  -webkit-box-flex: 0;
  -ms-flex: 0 0 100%;
  flex: 0 0 100%;
  max-width: 100%;
  position: relative;
  max-width: 100%;
  min-height: 1px;
  padding: 16px 24px;
  .j-card{
    box-shadow: 0 3px 6px -4px rgba(0,0,0,.12), 0 6px 16px 0 rgba(0,0,0,.08), 0 9px 28px 8px rgba(0,0,0,.05);
    border-color: transparent;
    border-radius: 20px;
    cursor: pointer;
    -webkit-transition: border-color .3s,-webkit-box-shadow .3s;
    transition: border-color .3s,-webkit-box-shadow .3s;
    transition: box-shadow .3s,border-color .3s;
    transition: box-shadow .3s,border-color .3s,-webkit-box-shadow .3s;
    margin: 0;
    padding: 0;
    color: rgba(0,0,0,.65);
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5715;
    list-style: none;
    font-feature-settings: 'tnum';
    position: relative;
    background: #fff;
    .j-card-img{
      margin-right: -1px;
      margin-left: -1px;
      img{
        display: block;
        border-radius: 2px 2px 0 0;
        object-fit: cover;
        width: 100%;
        padding: 24px 24px 0 24px;
      }
    }
    .j-card-text{
      color: #314659;
      padding: 24px;
    .j-card-detail{
        display: flex;
        flex-direction: column;
        overflow: hidden;
        .j-card-title{
            min-height: 50px;
            margin-bottom: 16px;
            color: #0d1a26;
            font-weight: 400;
            white-space: normal;
            text-overflow: initial;
            word-break: break-word;
            overflow: hidden;
        }
        .j-card-content{
          flex: auto;
          color: #697b8c;
          cursor: pointer;
          font-size: 14px;
          font-variant: tabular-nums;
          margin-bottom: 15px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          line-height: 1.5;
        }
        .j-card-info{
            font-size: 18px;
            color: rgba(0,0,0,.4);
            border-radius: 16px;

            .text-item{
              margin-right: 10px;
              margin-left: 10px;
            }
            .author-name{
              color:#666;
            }
            .votes-num{
              color: #d48806;
              font-weight: bold;
              &::before{
                  content: 'x ';
                  font-size: 12px;
              }
        }

        .dot{
            color: #999;
            font-weight: normal;
            padding: 0 5px;
            }
        }
      }
    }

  }
}

@media screen and (min-width: 576px){
  .art-card
    .j-card{
      .j-card-img{
        margin-bottom: 12px;
        padding: 16px 16px 0;
        img {
            height: 184px;
        }
      }
      .j-card-text{
        padding: 16px;
        .j-card-detail{
          min-height: 150px;
          .j-card-title{
            font-size: 18px;
          }
        }
      }
    }
}

@media screen and (min-width: 640px){
  .art-card{
    .j-card{
      .j-card-img{
        margin-bottom: 12px;
        padding: 16px 16px 0;
        img {
            height: 184px;
        }
      }
      .j-card-text{
        padding: 16px;
        .j-card-detail{
          min-height: 150px;
          .j-card-title{
            font-size: 2rem;
          }
        }
      }
    }
  }
}

@media screen and (min-width: 768px){
  .j-content{
    display: flex;
    flex-direction: column;
    .j-card{
      .j-card-img{
        margin-bottom: 1rem;
        padding: 2rem 2rem 0;
        img {
            height: 260px;
        }
      }
      .j-card-text{
        padding: 2rem;
        .j-card-detail{
          min-height: 200px;
          .j-card-title{
            font-size: 2rem;
            min-height: 4rem;
            font-weight: 600;
          }
          .j-card-content{
            font-size:1rem;
            font-weight: 500;
          }
        }
      }
    }
  }
}

@media screen and (min-width: 1024px){
  .j-content{
    .j-card{
      display: flex;
      align-items: center;
      justify-content: space-around;
      margin: 0 auto;
      height: 300px;
      box-shadow: 0 6px 10px rgba(0,0,0,.06);
      .j-card-img{
        margin-bottom: 12px;
        padding: 16px 16px 0;
        img {
            height: 184px;
        }
      }
      .j-card-text{
        padding: 2rem;
        .j-card-detail{
          min-height: 150px;
          .j-card-title{
            font-size: 2rem;
            font-weight: 600;
          }
          .j-card-content{
            font-size:1rem;
            font-weight: 500;
          }
        }
      }
    }
  }
}
@media screen and (min-width: 1280px){
  .j-content {
        margin-right: 12px;
        margin-left: 12px;

        .j-card{
          display: flex;
          align-items: center;
          justify-content: space-around;
          margin: 0 auto;
          height: 300px;
          box-shadow: 0 6px 10px rgba(0,0,0,.06);
          &:hover{
            box-shadow: 0 3px 6px -4px rgba(0,0,0,.12), 0 6px 16px 0 rgba(0,0,0,.08), 0 9px 28px 8px rgba(0,0,0,.05);
          }
          .j-card-img{
            margin-bottom: 12px;
            padding: 16px 16px 0;
            img {
                height: 180px;
            }
          }
          .j-card-text{
            padding: 2rem;
            .j-card-detail{
              min-height: 180px;
              .j-card-title{
                font-size: 2rem;
                font-weight: 600;
              }
            }
          }
        }
    }

}





</style>
