<template>
    <div class="right">
      <div class="contain">
        <div class="header31">
          <img :src="categoryL1List[current].bannerUrl" alt="" v-if="categoryL1List[current]">
        </div>
        <ul class="goodlist">
          <li class="goods" v-for="(goodlist,index) in categoryL1List[current].subCateList
" :key="index" >
            <a href="javascript:;">
              <div class="imgtain">
                <img :src="goodlist.wapBannerUrl" alt="" v-if="goodlist">
              </div>
              <div class="imgmsg" v-if="goodlist">{{goodlist.name}}</div>
            </a>
          </li>

        </ul>
      </div>
    </div>
</template>

<script>

  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'

  export default {
    props: [
      'current'
    ],
    mounted(){
      this.$store.dispatch('getCategoryL1List')
//      this.$store.dispatch('getCategoryL1List',()=>{
//        this.$nextTick(()=>{
//          console.log(this.currentIndex,'9999')
//          console.log(this.categoryL1List,'00000')
//        })
//      });
      this.$nextTick(()=>{
        new BScroll('.right',{
          scrollY: true,
          click:true
        })
      })
    },
//    updated(){
//      console.log(this.current)
//    },
    computed:{
      ...mapState(['currentIndex','categoryL1List'])
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  html
  body
    margin 0
    padding 0
    list-style none
    .right
      width 313px
      float left
      height 636px
      /*background greenyellow*/
      .contain
        width 100%
        float left

        .header31
          width 80%
          height 100px
          left 0
          right 0
          margin auto
          /*position absolute*/
          margin-top 20px
          background gainsboro
          & img
            width 100%
            height 100%
        .goodlist
          width 100%
          height 100%
          float left

          /*background yellow*/
          &>.goods
            width 32.5%
            height 140px
            float left

            .imgtain
              width 100%
              height 100px
              text-align center
              & img
                width 60px
                height 60px
                /*background yellowgreen*/

                margin-top 20px
            .imgmsg
              width 100px
              height 40px
              /*background goldenrod*/
              text-align center
              line-height 40px

</style>
