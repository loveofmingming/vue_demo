<template>
  <div class="app">
    <div class="header">

      <input class="input" type="text" placeholder="搜索商品，共1234件好物">
      <i class="iconfont icon-sousuo"></i>
    </div>
    <div class="container">
      <div class="left">
        <ul class="licontainer">
          <li :class="{on: current === index}" @click="active(index)" v-for="(lis ,index) in categoryL1List " :key="index" class="item"> <a class="text" href="#">{{lis.name}}</a>
          </li>
        </ul>
      </div>
      <Right :current="current"/>
      <!--组件间传递index，不用再在vuex里传了-->
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  import {mapState} from 'vuex'

  import Right from '../../components/ChooseRight/Right.vue'
  export default {
    data(){
      return{
        current: 0,
      }
    },
    mounted(){
      this.$store.dispatch('getCategoryL1List',()=>{
        this.$nextTick(()=>{
          ulHeight()
          console.log(this.currentIndex,'9999')
          console.log(this.categoryL1List,'00000')
        })
      });
      this.$nextTick(()=>{
        new BScroll('.left',{
          scrollY: true,
          click:true
        })
      })

    },
    methods:{
      active(index){
        this.current = index
        //拆分组件后可以用组件间通讯方式 传递index
        //子传父 传回调，父传子 直接传（上面）
//        this.$store.dispatch('getIndex',index)

        this.$store.dispatch('getCategoryL1List',()=>{
          this.$nextTick(()=>{
            console.log(this.currentIndex,'77777')
            console.log(this.categoryL1List,'00000')
          })
        });
      },
      ulHeight() {
        const liLength = this.categoryL1List.length
        const liHeight = 55;
        this.$refs.fontUl.style.width = liHeight * liLength + 'px';
      },
    },
    computed:{
      ...mapState(['categoryL1List'])
    },
    components:{
      Right
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

    .app

      .header
        bottom-border-1px($bc)
        width 100%
        height 50px
        text-align center
        .input
          text-align center
          line-height 50px
          height 28px
          width 380px
          margin-top 10px
          font-size 15px
          background #ededed
          border-radius 5px
          border none
        .iconfont
          display block
          position absolute
          top 16px
          left -130px
          font-size 18px
      .container
        clearFix()
        position absolute
        width 100%
        height 636px
        background ghostwhite
        overflow hidden
        /*margin-top 50px*/
        .left
          border-right solid 1px $bc
          width 100px
          height 636px
          /*background gainsboro*/
          float left
          .licontainer
            width 100%
            .item
              width 100%
              height 55px
              text-align center
              line-height 55px
              border-left  2px solid ghostwhite
              &.on
                color #02a774
                font-weight 700
                border-left  2px solid #02a774
























</style>
