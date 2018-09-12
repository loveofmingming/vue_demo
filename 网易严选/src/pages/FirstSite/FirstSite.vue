<template>
  <div class="contain">
    <div class="title">
      <img src="./images/logo.png" alt="">
      <div class="titler" >
        <i class="iconfont icon-sousuo"></i>
        <input class="input" type="text" placeholder="搜索商品，共1234件好物">
      </div>
    </div>
    <div class="swiper-contain">

      <div class="swiper-title">
        <div class="swipert">
          <ul class="contant" ref="fontUl">
            <li  :class="{on: current === index }" @click="lactive(index)" v-for="(lis,index) in headCateList" :key="index" >
              <span>{{lis.name}}</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(fswiper,index) in headCateList" :key="index">
            <img :src="fswiper.bannerUrl">
          </div>

        </div>

      </div>
    </div>

    <div class="listcontainer">
      <div class="listwoman">
        <div class="listtitle">
          <span>锄禾日当午，汗滴禾下土</span>
        </div>
        <div class="listl">
          <img src="./images/1.png" alt="">
        </div>
        <div class="listr">
          <img src="./images/1.png" alt="">
        </div>
        <div class="listl">
          <img src="./images/2.png" alt="">
        </div>
        <div class="listr">
          <img src="./images/3.png" alt="">
        </div>

      </div>
    </div>


  </div>


</template>

<script>
  import Swiper from 'swiper'
  import BScroll from 'better-scroll'
  import 'swiper/dist/css/swiper.min.css'

  import {mapState} from 'vuex'

  export default {
    data() {
      return {
//        fontArr:["居家","居家","居家","居家","居家","居家","居家","居家","居家","居家"]
        current: 0
      }
    },

    mounted() {
      this.$store.dispatch('getHome')
      this.$store.dispatch('getHeadCateList', () => {
        this.$nextTick(() => {
          this.init_firstUl();
          new BScroll('.swipert', {
            scrollX: true,
            click: true
          })
          new Swiper('.swiper-container', {
            loop: true,
            autoplay: true,
            pagination: {
              el: '.swiper-pagination'
            },
          })
        })
      })


    },
    computed: {
      ...mapState(['headCateList','home'])
    },
    methods: {

      init_firstUl() {
        const liLength = this.headCateList.length
        const liWidth = 80;
        this.$refs.fontUl.style.width = liWidth * liLength + 'px';
      },


      lactive(index){
        this.current = index
      },

    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"

html
body
  margin 0
  padding 0
  list-style none
.contain
  /*background gainsboro*/
  .title
    width 100%
    height 45px
    position relative
    img
      width 75px
      margin-left 15px
      margin-top 15px
    .titler
      position relative
      right  20px
      top 15px
      width 300px
      /*background yellow*/
      height 30px
      float right
      .input
        text-align center
        line-height 53px
        height 32px
        width 290px
        margin-left 10px
        margin-top -6px
        background #ededed
        border-radius 5px
        border none
      .iconfont
        display block
        position absolute
        left 45px
        top 3px
        font-size 18px
  .swiper-contain
    width 100%
    height 250px
    /*background gainsboro*/
    .swiper-title
      /*background gainsboro*/
      width 100%
      height 50px
      .swipert
        width: 100%
        overflow hidden

        .contant
         height 50px
         /*background green*/
         white-space nowrap

        & li
          display inline-block
          height: 50px
          width 80px
          line-height: 50px
          text-align center
          &.on
            color #02a774
            font-weight 700
            border-bottom  2px solid #02a774

    .swiper-container
      position relative
      width 100%
      height 200px
      background gainsboro
      .swiper-wrapper
        position absolute
        height 190px
        .swiper-slide
          width 100%
          height 100%
        .swiper-slide img
          width 100%
          height 100%

  .listcontainer

    .listwoman
      width 100%
      height 1000px
      background white

      .listtitle
        width 100%
        height 100px
        text-align center

        span
          display block
          line-height 100px
          font-size 20px

      .listl
        width 48%
        height 220px
        background gainsboro
        float left
        margin-top 1%
        margin-left 1%
        & img
          width 100%
          height 100%

      .listr
        width 48%
        height 220px
        background gainsboro
        float left
        margin-top 1%
        margin-left 2%
        & img
          width 100%
          height 100%


</style>
