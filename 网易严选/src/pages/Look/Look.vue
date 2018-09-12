<template>
  <div class="app2">
    <div class="header2">
      <i class="iconfont icon-home" @click="$router.push('./first')"></i>
      <img src="./images/logo.png" alt="">
      <i class="iconfont icon-sousuo"@click="$router.push('./look')"></i>
      <i class="iconfont icon-gouwuche" @click="$router.push('./car')"></i>
    </div>
    <div class="swiper-container">
      <div id="abc" class="swiper-wrapper " >
        <div class="swiper-slide" v-for="(swiperimg,index) in focusList" :key="index" >
          <img :src="swiperimg.picUrl">
        </div>

      </div>
    </div>
    <div class="scrollcontainer2">
      <div class="scroll2">
        <ul class="contant" ref="imgUl">
          <li class="contantitem" v-for="(imgs ,index) in categoryL1List" :key="index">
          <img :src='imgs.bannerUrl' alt="">
          <span>{{imgs.name }}</span>
        </li>
        </ul>
      </div>
    </div>

    <div class="list">
      <div class=list1title>为你推荐</div>
      <div class="list1">
        <div class="list1img">
          <img src="./images/banner03.jpg" alt="">
          <div class="list1logo">
            严选推荐
          </div>
        </div>
        <div class="list1msg">
          <span class="list1msg1" >9月服饰鞋包上市</span>
          <span class="list1msg2">59元起</span>
          <span class="list1msg3">秋天从现在开始，更有超值折扣等你</span>
        </div>
      </div>
      <div class="list2">
        <div class="list2msg">
          <div class="list2avtar">
            <img src="./images/2.png" alt="">
          </div>
          <span class="food">饮食组：万万</span>
          <span class="food1">10分钟做出异域大餐</span>
          <div class="food2">
            所谓美食无国界，虽说中华美食博大精深，但偶尔在家做些异域美食也是不错的
          </div>
        </div>
        <div class="list2img">
          <img src="./images/39.png" alt="">
          <div class="list2logo">挑款师推荐</div>
        </div>
      </div>
      <div class="list3">
        <div class="list3msg">
          <div class="list3avtar">
            <img src="./images/2.png" alt="">
          </div>
          <span class="food">饮食组：万万</span>
          <span class="food1">10分钟做出异域大餐</span>
          <div class="food2">
            所谓美食无国界，虽说中华美食博大精深，但偶尔在家做些异域美食也是不错的
          </div>
        </div>
        <div class="list3img">
          <img src="./images/39.png" alt="">
          <div class="list3logo">挑款师推荐</div>
        </div>
      </div>
      <div class="list4">
        <div class="list4img">
          <img src="./images/banner03.jpg" alt="">
          <div class="list4logo">
            严选推荐
          </div>
        </div>
        <div class="list4msg">
          <span class="list4msg1" >9月服饰鞋包上市</span>
          <span class="list4msg2">59元起</span>
          <span class="list4msg3">秋天从现在开始，更有超值折扣等你</span>
        </div>
      </div>
      <div class="list5">
        <div class="list5msg">
          <div class="list5avtar">
            <img src="./images/2.png" alt="">
          </div>
          <span class="food">饮食组：万万</span>
          <span class="food1">10分钟做出异域大餐</span>
          <div class="food2">
            所谓美食无国界，虽说中华美食博大精深，但偶尔在家做些异域美食也是不错的
          </div>
        </div>
        <div class="list5img">
          <img src="./images/39.png" alt="">
          <div class="list5logo">挑款师推荐</div>
        </div>
      </div>
      <div class="list6">
        <div class="list6msg">
          <div class="list6avtar">
            <img src="./images/2.png" alt="">
          </div>
          <span class="food">饮食组：万万</span>
          <span class="food1">10分钟做出异域大餐</span>
          <div class="food2">
            所谓美食无国界，虽说中华美食博大精深，但偶尔在家做些异域美食也是不错的
          </div>
        </div>
        <div class="list6img">
          <img src="./images/39.png" alt="">
          <div class="list6logo">挑款师推荐</div>
        </div>
      </div>
      <div class="list7"></div>
    </div>
    <div class="line"></div>
    <div class="scrollmsg">
      <div class="title"></div>
    </div>
    <div class="bottoml">货已售罄</div>

  </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import BScroll from 'better-scroll'

  import {mapState} from 'vuex'


  export default {
    data(){
      return{
//        imgArr:[{url:"/images/2.png",msg:"网易推荐"},{url:"/images/3.png",msg:"腾讯推荐"},{url:"/src/pages/Look/images/2.png",msg:"阿里推荐"},{url:"/images/2.png",msg:"京东推荐"},{url:"/images/2.png",msg:"百度推荐"}],
//        categoryL1List1:'',
      }
    },
    computed: {
      ...mapState(['focusList','categoryL1List']),

    },
  watch:{
    categoryL1List1 (){
      console.log(this.categoryL1List1)
      setTimeout(()=>{
        console.log(this.categoryL1List)
      },1000)
    }
  },
    mounted(){

      this.categoryL1List1 = this.categoryL1List
      this.$store.dispatch('getFocusList',()=>{
        this.$nextTick(()=>{
          new Swiper('.swiper-container',{
            loop:true,
            autoplay:true,
            pagination:{
              el: '.swiper-pagination'
            },
          })
        })
      })

      this.$store.dispatch('getCategoryL1List',()=>{
        this.$nextTick(()=>{

          this.ulLength()
          new BScroll('.scroll2',{
            scrollX: true,
            click:true
          })

        })
      })
    },
    methods:{
      ulLength(){
        const liLength = this.categoryL1List.length
        const liWidth =121;
        this.$refs.imgUl.style.width = liWidth * liLength+ 'px';
      }
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
    .app2
      overflow hidden

      .header2
        width 100%
        height 45px
        position relative
        border-bottom solid 1px gainsboro
        text-align center
        i
          font-size 28px
          position absolute
          top 10px
        .icon-home
          left 10px
        img
         width 100px
         line-height 45px
         margin-top 8px
        .icon-sousuo
          right 60px
        .icon-gouwuche
          right 30px

      .swiper-container
        position relative
        margin-top 10px
        width 100%
        height 200px
        /*background yellow*/
        .swiper-wrapper
          position absolute
          /*width 100%*/
          /*height 100%*/

          .swiper-slide

            /*background red*/
          .swiper-slide>img
            width 90%
            height 90%
            position absolute
            top 0
            left 0
            right 0
            bottom 0
            margin auto
            border-radius 5px
      .scrollcontainer2
        /*position absolute*/
        width 100%
        height 180px
        background ghostwhite
        margin-top 10px
        border-top solid 1px ghostwhite
        .scroll2
          width 100%
          height 170px
          background white
          overflow hidden
          .contant
            /*width 1000px*/
            height 150px
            /*background yellowgreen*/
            white-space nowrap
            overflow hidden
            .contantitem
              width 100px
              height 100px
              background yellow
              float left
              margin-left 20px
              margin-top 15px
              text-align center
              & img
                width 100px
                height 100px
                border-radius 5px
              & span
                display block
                margin-top 10px
      .list
        width 100%
        height 1455px
        position relative
        background white
        /*margin-top 190px*/
        text-align center
        .list1title
          position absolute
          font-size 20px
          margin-top  50px
          text-align center
          width 100%
        .list1
          width 90%
          height 300px
          background gainsboro
          position absolute
          left 20px
          top 100px
          border-radius 5px
          .list1img
            position relative
            width 100%
            height 200px
            background gray
            & img
              width 100%
              height 100%

            .list1logo
              position absolute
              width 80px
              height 20px
              /*background red*/
              top 10px
              left 20px
              border-radius 10px
              z-index 111
              border solid 1px gray
              background white
              line-height 20px
          .list1msg
            width 100%
            height 100px
            position relative
            background ghostwhite
            .list1msg1
              position absolute
              top 10px
              left 5px
              font-size 20px
              font-weight 600
            .list1msg2
              position absolute
              top 10px
              right  5px
              font-size 20px
              font-weight 600
            .list1msg3
              position absolute
              top 50px
              left 5px
              font-size 18px
        .list2
          width 90%
          height 150px
          /*background yellow*/
          position absolute
          left 0
          right 0
          margin auto
          margin-top 425px
          border solid 1px gainsboro
          border-radius 5px
          .list2msg
            position relative
            width 60%
            height 65px
            /*background gray*/
            float left
            .list2avtar
              width 50px
              height 50px
              border-radius 50%
              border solid 1px gainsboro
              /*background indianred*/
              & img
                width 100%
                height 100%
            .food
              display block
              position absolute
              top 22px
              left 50px
            .food1
              display block
              position absolute
              top 65px
              left 5px
              font-size 20px
            .food2
              width 210px
              position absolute
              top 95px
              left 5px
              font-size 13px
              color #666
              text-align left
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
              overflow: hidden;
              text-overflow: ellipsis;
          .list2img
            position relative
            width 40%
            height 150px
            /*background yellowgreen*/
            float right
            & img
              width 100%
              height 100%
            .list2logo
              width 100px
              height 20px
              position absolute
              top 15px
              left 10px
              border-radius 10px
              z-index 111
              border solid 1px gray
              line-height 20px
        .list3
          width 90%
          height 150px
          /*background gray*/
          position absolute
          left 0
          right 0
          margin auto
          margin-top 600px
          border solid 1px gainsboro
          border-radius 5px
          .list3msg
            position relative
            width 60%
            height 65px
            /*background gray*/
            float left
            .list3avtar
              width 50px
              height 50px
              border-radius 50%
              border solid 1px gainsboro
              /*background indianred*/
              & img
                width 100%
                height 100%
            .food
              display block
              position absolute
              top 22px
              left 50px
            .food1
              display block
              position absolute
              top 65px
              left 5px
              font-size 20px
            .food2
              width 210px
              position absolute
              top 95px
              left 5px
              font-size 13px
              color #666
              text-align left
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
              overflow: hidden;
              text-overflow: ellipsis;
          .list3img
            position relative
            width 40%
            height 150px
            /*background yellowgreen*/
            float right
            & img
              width 100%
              height 100%
            .list3logo
              width 100px
              height 20px
              position absolute
              top 15px
              left 10px
              border-radius 10px
              z-index 111
              border solid 1px gray
              line-height 20px

        .list4
          width 90%
          height 300px
          /*background yellowgreen*/
          position absolute
          left 0
          right 0
          margin auto
          margin-top 775px
          border solid 1px gainsboro
          border-radius 5px
          .list4img
            position relative
            width 100%
            height 200px
            /*background gray*/
            & img
              width 100%
              height 100%
            .list4logo
              position absolute
              width 80px
              height 20px
              /*background red*/
              top 10px
              left 20px
              border-radius 10px
              z-index 111
              border solid 1px gray
              background white
              line-height 20px
          .list4msg
            width 100%
            height 100px
            position relative
            background ghostwhite
            .list4msg1
              position absolute
              top 10px
              left 5px
              font-size 20px
              font-weight 600
            .list4msg2
              position absolute
              top 10px
              right  5px
              font-size 20px
              font-weight 600
            .list4msg3
              position absolute
              top 50px
              left 5px
              font-size 18px
        .list5
          width 90%
          height 150px
          /*background gainsboro*/
          position absolute
          left 0
          right 0
          margin auto
          margin-top 1100px
          border solid 1px gainsboro
          border-radius 5px
          .list5msg
            position relative
            width 60%
            height 65px
            /*background gray*/
            float left
            .list5avtar
              width 50px
              height 50px
              border-radius 50%
              border solid 1px gainsboro
              /*background indianred*/
              & img
                width 100%
                height 100%
            .food
              display block
              position absolute
              top 22px
              left 50px
            .food1
              display block
              position absolute
              top 65px
              left 5px
              font-size 20px
            .food2
              width 210px
              position absolute
              top 95px
              left 5px
              font-size 13px
              color #666
              text-align left
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
              overflow: hidden;
              text-overflow: ellipsis;
          .list5img
            position relative
            width 40%
            height 150px
            /*background yellowgreen*/
            float right
            & img
              width 100%
              height 100%
            .list5logo
              width 100px
              height 20px
              position absolute
              top 15px
              left 10px
              border-radius 10px
              z-index 111
              border solid 1px gray
              line-height 20px
        .list6
          width 90%
          height 150px
          /*background gainsboro*/
          position absolute
          left 0
          right 0
          margin auto
          margin-top 1275px
          border solid 1px gainsboro
          border-radius 5px
          .list6msg
            position relative
            width 60%
            height 65px
            /*background gray*/
            float left
            .list6avtar
              width 50px
              height 50px
              border-radius 50%
              border solid 1px gainsboro
              /*background indianred*/
              & img
                width 100%
                height 100%
            .food
              display block
              position absolute
              top 22px
              left 50px
            .food1
              display block
              position absolute
              top 65px
              left 5px
              font-size 20px
            .food2
              width 210px
              position absolute
              top 95px
              left 5px
              font-size 13px
              color #666
              text-align left
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
              overflow: hidden;
              text-overflow: ellipsis;
          .list6img
            position relative
            width 40%
            height 150px
            /*background yellowgreen*/
            float right
            & img
              width 100%
              height 100%
            .list6logo
              width 100px
              height 20px
              position absolute
              top 15px
              left 10px
              border-radius 10px
              z-index 111
              border solid 1px gray
              line-height 20px



      .line
        width 100%
        height 15px
        background ghostwhite
      .scrollmsg
        width 100%
        height 300px
        .title
          width 100%
          height 50px
          background ghostwhite




      .bottoml
        top-border-1px($e4e4e4)
        width 100%
        height 150px
        text-align center
        line-height 100px
        font-size 28px
        color red
        background ghostwhite




















</style>
