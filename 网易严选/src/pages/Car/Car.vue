<template>
  <div class="app4" >
    <div class="header4">
      <span>购物车</span>
      <a>领券</a>
    </div>
    <div class="contain4">

      <div class="header4msg">
        <ul class="msgcontain">
          <li>
            <i class="iconfont icon-yuanquan"></i>

            <span>
            30天无忧退货
          </span>
          </li>
          <li>
            <i class="iconfont icon-yuanquan"></i>
            <span>
            48小时快速退款
          </span>
          </li>
          <li>
            <i class="iconfont icon-yuanquan"></i>
            <span>
            满88元免邮费
          </span>
          </li>
        </ul>
      </div>
      <i class="iconfont icon-gouwuche"></i>
      <div class="mainimg">
       去添加点什么吧
      </div>
      <div class="logobutton" @click="$router.push('./personal')">
        去登陆
      </div>
    </div>


  </div>
</template>

<script>
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  html
  body
    margin 0
    padding 0
    list-style none
    .header4
      width 100%
      height 50px
      /*background yellowgreen*/

      line-height 50px
      & span
        width 60px
        height 20px
        font-size 20px
        float left
        margin-left 180px
      & a
        margin-right 30px
        color red
        float right
    .contain4
      width 100%
      height 690px
      background #f4f4f4
      text-align center
      .icon-gouwuche
        display block
        font-size 150px
        margin-top 150px

      .header4msg
        width 100%
        height 30px
        background #f4f4f4
        .msgcontain
          display flex
          width 100%
          & li
            width 200px
            height 30px
            text-align center
            line-height 30px
            & i
              font-size 12px
            & span
              font-size 13px
      .mainimg
        width 100%
        height 50px
        line-height 50px
        text-align center
      .logobutton
        width 60%
        height 50px
        background #b4282d
        text-align center
        line-height 50px
        color #fff
        left 0
        right 0
        margin auto
        border-radius 5px





</style>
