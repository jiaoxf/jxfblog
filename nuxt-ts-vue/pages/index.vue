<template>
	<div class="container index" :class="{navActive: isNav}">
		<div class="cover">
      <!-- <foot-bar /> -->
			<div id="scene" :style="{height:boxH}">
				<div class="layer" data-depth="0.4" :style="layerStyle">
					<img id="image" :style="imgStyle" src="../static/img/background.png" width="1920" height="1080">
				</div>
        <div class="mouseBtn">
          <Icon name="shubiao" className="iconStyle"/>
          <i class="m-line"></i>
          <span class="mouseText">滑动</span>
        </div>
			</div>
		</div>
    <section class="j-content">
      <ArticleBlock />
      <ArticleBlock />
      <ArticleBlock />
      <ArticleBlock />
    </section>
    <div class="menu" @click="menu">
      <!-- <span class="iconfont" :class="isNav ? 'icon-close' : 'icon-menu'"></span> -->
      <Icon name="daohangliebiao"/>
    </div>
    <Footer />
    <Nav :navShow="$store.state.navShow"/>
    <Maskdiv :maskShow="$store.state.navShow"/>
		<Loading v-if="loading"></Loading>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
// import Parallax from 'parallax-js'
Component.registerHooks([
    'beforeRouteEnter',
    'beforeRouteLeave',
    'beforeRouteUpdate'
])
import ArticleBlock from '@/components/ArticleBlock.vue'
import Icon from '@/components/Icon.vue';
import Navbar from '@/components/Nav.vue'
import Footbar from '@/components/FootBar.vue'
import Maskdiv from '@/components/Mask.vue'
import Footer from '@/components/Footer.vue'

import { Style } from '@/types/index';



@Component({
    name:'index',
    components: {
        ArticleBlock,
        Icon,
        Navbar,
        Footbar,
        Maskdiv,
        Footer
    },
})
export default class Index extends Vue {
    private visible: boolean = false;
    private layerStyle: any = {
      width: '',
      height: ''
    };
    private imgStyle: Object = {};
		private	boxH: any = '100%';
		private	boxW: any = '100%';
		private	isNav: Boolean = false;
		private	loading: Boolean = true;
		private	loadingType: String = 'more';
		private	page: Number = 1;
		private	isBack: Boolean = false;
		private	maskShow: Boolean = false;
		private	image: null | String = null;
    private windowChange (): void {

    }
    /* private head() {
      return {
        title: this.info.web_name,
        meta: [
                  { hid: 'keywords', name: 'keywords', content: this.info.web_seo },
                  { hid: 'description', name: 'description', content: this.info.web_describe },
              ]
      }
    } */
    /* computed: {
		info(){
			return this.$store.state.data
		}
  }, */
  private mounted() {
    document.body.style.overflowY = 'hidden';
    let img = new Image()
    img.src = '../static/img/background.png'
		img.onload = () => {
			setTimeout(() => {
				// this.image = this.info.cover.image
				this.image = '../static/img/background.png'
				this.loading = false;
				document.body.style.overflowY = '';
			}, 1500)
    }

    this.$store.commit('isIndex')

    const scene = document.getElementById('scene');
  }
  private beforeRouteEnter(to: any,from: any,next: any){
		next((vm: any) => {
      console.log(vm)
			vm.init()
			vm.windowChange = vm.$debounce(vm.init, 100)
			window.onresize = () => vm.windowChange()
			vm.isBack = true
		})
  };
  private beforeRouteLeave(to: any,from: any,next: any){
      document.body.style.overflowY = ''
      window.onresize = null
      this.isBack = false
      setTimeout(() => this.isNav = false, 500)
      document.removeEventListener('touchmove', this.cancelEvent)
      next()
  };
  private init(){
    this.boxH = document.documentElement.clientHeight + 'px';
    this.boxW = document.documentElement.clientWidth + 'px';
    this.coverLayer()
  }
  private cancelEvent(e: any){
    e.preventDefault()
  };
  private coverLayer(){
			let id = document.getElementById('scene'),
				_w = parseInt(this.boxW),
        _h = parseInt(this.boxH),
				x, y, i,
				e = (_w >= 1000 || _h >= 1000) ? 1000 : 500;

            if (_w >= _h) {
                i = _w / e * 50;
                y = i;
                x = i * _w / _h;
            } else {
                i = _h / e * 50;
                x = i;
                y = i * _h / _w;
            }
			const style:Style = {
                width: _w + x + 'px',
                height: _h + y + 'px',
                marginLeft: - 0.5 * x + 'px',
                marginTop: - 0.5 * y + 'px'
			}
			this.layerStyle = Object.assign({}, this.layerStyle, style);
      this.coverImg()
    };
    private coverImg(){
			const width = parseInt(this.layerStyle.width),
                  height = parseInt(this.layerStyle.height),
      ratio = 1080 / 1920,
      style:Style = {};

			const compute = height / width > ratio;

			style['width'] = compute ? (height / ratio + 'px') : `${width}px`;
			style['height'] = compute ? `${height}px` : (width * ratio + 'px');

			style['left'] = (width - parseInt(style.width)) / 2 +'px';
			style['top'] = (height - parseInt(style.height)) / 2 +'px';

			this.imgStyle = Object.assign({}, this.imgStyle, style);
    };
    private toPage(url: String){
			this.$router.push(`/${url}`)
    };
    private menu(){
      this.$store.commit('closeMenu')
      // console.log(this.$store.state.navShow)
			if(this.$store.state.navShow){
				document.addEventListener('touchmove', this.cancelEvent, {passive: false})
			}else{
				document.removeEventListener('touchmove', this.cancelEvent)
      }

    };

    private article(id: Number | String){
			this.$router.push(`/${id}`)
		}
}
</script>
<style lang="scss" scoped>
.index{
	position: absolute;
	width: 100%;
	#scene{
		height: 100%;
		position: relative;
		overflow: hidden;
		#image{
			position: absolute;
			max-width: none;
			display: block;
    }
    .mouseBtn{
      width: 40px;
      height: 100px;
      position: absolute;
      bottom: 60px;
      margin: 0 auto;
      left:50%;
      margin-left: -20px;
      .m-line{
        display: block;
        width: 2px;
        height: 32px;
        border-radius: 2px;
        position: absolute;
        left: 50%;
        margin-left: -1px;
        top: 0px;
        background: #f90;
        animation:mymove 2s infinite;
        -webkit-animation:mymove 2s infinite; /*Safari and Chrome*/


        @keyframes mymove
        {
          from {height:0px;}
          to {height:32px;}
        }

        @-webkit-keyframes mymove /*Safari and Chrome*/
        {
          from {height:0px;}
          to {height:32px;}
        }
      }
      .mouseText{
        color: #fff;
        display: block;
        width: 100%;
        position: absolute;
        left: 0;
        text-align: center;
        bottom: 0px;
        font-size: 12px;
        letter-spacing: 2px;
      }
    }
    .iconStyle{
      color: #fff;
      width: 100%;
      height: 2em;
      position: absolute;
      bottom:20px;
    }
	}
	.cover{
		width: 100%;
		height: 100vh;
		position: relative;
		/* z-index: 101; */
		overflow: hidden;
			.logo{
				transition: all .3s;
				.iconfont{
					font-size: 36px;
					cursor: pointer;
				}
			}
			.logo-img{
				width: 100px;
				height: 44px;
				position: relative;
				transition: all .3s;
				img{
					opacity: 1;
					width: 100%;
					position: absolute;
					transition: all .3s;
					cursor: pointer;
					&:last-child{
						opacity: 0;
					}
				}

    }

		.cover-bg{
			width: 100%;
			height: 100%;
			img{
				position: absolute;
			}
		}
	}
	.foot{
		text-align: center;
		a{
			margin: 0 auto;
			font-size: 13px;
			color: #666;
			text-decoration: none;
			display: inline-block;
			padding: 1px 0 2px;
		}
  }
}
.container.navActive{
	.logo{
		color: #333;
	}
	.cover .header .logo-img img{
		opacity: 0;
		&:last-child{
			opacity: 1;
		}
	}
	.nav{
		top: 0;
	}
}
</style>
