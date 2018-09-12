<template>
  <div class="app5">
    <div class="header5">
      <i class="iconfont icon-home" @click="$router.push('./first')"></i>
      <img src="./images/logo.png" alt="">
      <i class="iconfont icon-sousuo" @click="$router.push('./look')"></i>
      <i class="iconfont icon-gouwuche" @click="$router.push('./car')"></i>
    </div>
    <div class="contain5" v-if="isshow==='aaa'">
      <div class="tontainlogo">
        <img src="./images/123.png" alt="">
      </div>
      <div class="phonelogin" @click="isshow='bbb'" >
        <i class="iconfont icon-shouji1"></i>
        <span>手机号码登录</span>
      </div>
      <div class="msglogin" @click="isshow='ccc'">
        <i class="iconfont icon-xinfeng"></i>
        <span>邮箱账号登录</span>
      </div>
      <div class="zhuce">
        <span>手机号快速注册</span>
        <i class="iconfont icon-jiantouyou"></i>
      </div>
      <div class="bt">
        <i class="iconfont icon-weixin"></i>
        微信
        <span>|</span>
        <i class="iconfont icon-weixin1"></i>
        QQ
        <span>|</span>
        <i class="iconfont icon-weibo"></i>
        微博
      </div>
    </div>
    <div class="pdl"  v-if="isshow==='bbb'">
      <div class="logo1">
        <img src="./images/123.png" alt="">
        <div class="_input">
          <input class="aaa " type="tel" maxlength="11" placeholder="请输入手机号"  v-model="tele">
        </div>
        <div class="pwd">
          <input  class="bbb" type="tel"  maxlength="8" placeholder="请输入短信验证码">
          <div class="yan" :disabled="!isRightPhone || computeTime > 0"
               :class="{right_phone_number:isRightPhone}" @click.prevent="sendCode">
            <a href="">{{computeTime > 0 ? `已发送（${computeTime}s）` : '获取验证码'}}</a>
          </div>
        </div>
      </div>
      <div class="isbt"  style="display: none" v-show="isphonebt" ><span>请输入手机号</span></div>
      <div class="logo1msg">
        <span class="msgleft">遇到问题？</span>
        <span class="msgright">使用密码验证登录</span>
      </div>
      <div class="phonelogin1" @click="telloginbt">
        <span>登录</span>
      </div>
      <div class="msglogin1" @click="isshow='aaa'">
        <span>其它方式登录</span>
      </div>
      <div class="btn1">
        <span>注册帐号</span>
        <i class="iconfont icon-jiantouyou"></i>
      </div>
    </div>
    <div class="ydl"  v-if="isshow==='ccc'">
      <div class="logo2">
        <img src="./images/123.png" alt="">
        <div class="_input2">
          <input class="aaa2 " type="tel" maxlength="11" placeholder="邮箱账号" v-model="name">
        </div>
        <div class="pwd2">
          <input  class="bbb2" type="password" maxlength="8" placeholder="密码" v-model="pwd">
        </div>
      </div>
      <div class="isbt2"  style="display: none"><span>请输入账号</span></div>
      <div class="logo1msg2">
        <span class="msgleft2">注册账号</span>
        <span class="msgright2">忘记密码</span>
      </div>
      <div class="phonelogin2" @click="nameloginbt" >
        <span>登录</span>
      </div>
      <div class="msglogin2" @click="isshow='aaa'">
        <span>其他登录方式</span>
      </div>

    </div>
  </div>
</template>

<script>
  import {Toast, MessageBox } from 'mint-ui';
  import {reqSendCode,reqMsgLogin,reqPwdLogin} from   '../../api/index'
  export default {
    data(){
      return{
        isshow:'aaa',
        isphonebt:true,
        tele:'',
        computeTime:0,
        code:'',
        pwd:'',
        name:''
      }
    },
    mounted:{

    },
    computed:{
      isRightPhone (){
        return /^1\d{10}$/.test(this.tele)
      }
    },
    methods:{


      //fa送验证码
      async sendCode (){
        this.computeTime = 30 ;
        //开启循环定时器，改变computeTime
        const intervalId = setInterval(()=>{
          this.computeTime--
          if(computeTime <= 0){
            clearInterval(intervalId)
          }
        },1000)
        //fa送请求发送短信验证码
        const result = await reqSendCode(this.tele)
        if(result.code===0) { // 成功
          Toast('验证码已发送')
        } else { // 失败
          // 停止计时
          this.computeTime = 0
          // alert('失败了')
          MessageBox.alert('验证码发送失败', '提示')
        }
      } ,

      showAlert(msg){
        MessageBox.alert(msg,'sss')
      },

      async telloginbt () {
        console.log(111);
        // 手机号登录前台验证
        const {tele, code} = this
        let result
        if (!this.isRightPhone) {
          console.log(222);

          this.showAlert('请输入正确手机号')
          return
        } else if (!/^\d{6}$/.test(code)) {
          this.showAlert('请输入正确验证码')
          return
        }
        //通过后，提交登录的请求
        result = await reqMsgLogin(tele, code)

        // 停止计时
        if(this.computeTime> 0 ) {
          this.computeTime = 0
        }
        // 根据结果做不同的处理
        if(result.code===0){ //登录成功
          const user = result.data
          //1.将user保存到state
          this.$store.dispatch('saveUser',user)
          //action zhong xie saveUser
          //2.自动跳转
          this.$router.replace('/profile')
        }else { //登录失败
          this.showAlert(result.msg)
        }

      },

      async nameloginbt (){
        const {name,pwd} = this
        if( this.showmsg===true ){
          //密码登录
          if (!name) {
            this.showAlert('请输入用户名')
            return
          } else if (!pwd) {
            this.showAlert('请输入密码')
            return
          }
          //通过后，提交登录的请求
          result = await reqPwdLogin({name,pwd})

          // 根据结果做不同的处理
          if(result.code===0){ //登录成功
            const user = result.data
            //1.将user保存到state
            this.$store.dispatch('saveUser',user)
            //action zhong xie saveUser
            //2.自动跳转
            this.$router.replace('/profile')
          }else { //登录失败
            this.showAlert(result.msg)
          }
        }
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
    width 100%
    //height 100%

  .app5
    width 100%



    .header5
      width 100%
      height 48px
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
        width 94px
        line-height 48px
        margin-top 8px
      .icon-sousuo
        right 60px
      .icon-gouwuche
        right 15px
    .contain5
      width 100%
      height 687px


      background #F2F5F4
      .tontainlogo
        width 100%
        height 226px
        text-align center
        line-height 262px
        & img
          width 147px
      .phonelogin
        width 90%
        height 55px
        background #b4282d
        left 0
        right 0
        margin auto
        border-radius 2px
        text-align center
        color white
        vertical-align middle
        & span
         line-height 55px
        & i
          font-size 18px


      .msglogin
        width 90%
        height 55px
        border solid 1px #b4282d
        left 0
        right 0
        margin auto
        margin-top 15px
        border-radius 2px
        text-align center
        line-height 55px
        color #b4282d
        vertical-align middle
        & span
          line-height 55px
        & i
          font-size 18px
          color #b4282d
      .zhuce
        width 100%
        height 20px
        /*background yellowgreen*/
        text-align center
        margin-top 20px
        color #333
        & i
          color #cccccc
      .bt
        width 100%
        height 50px
        /*background gainsboro*/
        margin-top 190px
        color #666
        z-index 101
        text-align center
        line-height 50px
        & span
          width 20px
          margin 0 10px
    .pdl
      width 100%
      height 680px
      background #fff
      .logo1
        width 100%
        height 230px
        text-align center
        line-height 290px
        & img
          display block
          width 100px
          left 0
          right 0
          margin auto
          margin-top 30px
      ._input
        width 90%
        height 55px
        left 0
        right 0
        margin auto
        /*background gainsboro*/
        margin-top 80px
        border none
        border-bottom 1px solid gainsboro
        .aaa
          width 100%
          height 100%
          float left
          font-size 13px
          margin-left 5px
          background:none
          outline:none
          border:0
      .pwd
        width 90%
        height 55px
        left 0
        right 0
        margin auto
        /*background gainsboro*/
        margin-top 10px
        border none
        position relative
        /*background greenyellow*/
        border-bottom 1px solid gainsboro
        .yan
          width 90px
          height 33px
          border-radius 3px
          /*background red*/
          margin-left 270px
          line-height 33px
          position absolute
          top 15px
          & a
            display: block;
            width 100%
            height 100%
            text-align: center;
            color: #333;
            font-size: 13px;
            background: #fff;
            border: 1px solid #7F7F7F;
            border-radius: 4px;
            line-height 33px
        .bbb
          width 100%
          height 100%
          float left
          font-size 13px
          margin-left 5px
          background:none
          outline:none
          border:0
          /*background yellowgreen*/
      .isbt
        width 90%
        height 40px
        left 0
        right 0
        margin auto
        font-size 12px
        color red
        line-height 40px
      .logo1msg
        width 90%
        height 60px
        /*background yellowgreen*/
        left 0
        right 0
        margin auto
        text-align center
        /*position relative*/
        span
          /*background yellow*/
          line-height 60px
        .msgleft
          margin-right 158px
      .phonelogin1
        width 90%
        height 55px
        background #b4282d
        left 0
        right 0
        margin auto
        border-radius 2px
        text-align center
        color white
        vertical-align middle
        & span
          line-height 55px
      .msglogin1
        width 90%
        height 55px
        border solid 1px #b4282d
        left 0
        right 0
        margin auto
        margin-top 15px
        border-radius 2px
        text-align center
        line-height 55px
        color #b4282d
        vertical-align middle
        & span
          line-height 55px
      .zhuce1
        width 100%
        height 20px
        /*background yellowgreen*/
        text-align center
        margin-top 20px
        color #333
        & i
          color #cccccc
      .btn1
        width 100%
        height 30px
        /*background goldenrod*/
        text-align center
        margin-top 5px
        & span
          line-height 30px
          color: #333
          height 20px
    .ydl
      width 100%
      height 650px
      background #fff
      .logo2
        width 100%
        height 230px
        text-align center
        line-height 290px
        & img
          display block
          width 100px
          left 0
          right 0
          margin auto
          margin-top 30px
      ._input2
        width 90%
        height 55px
        left 0
        right 0
        margin auto
        margin-top 80px
        border none
        border-bottom 1px solid gainsboro
        .aaa2
          width 100%
          height 100%
          float left
          font-size 13px
          margin-left 5px
          background:none
          outline:none
          border:0
      .pwd2
        width 90%
        height 55px
        left 0
        right 0
        margin auto
        /*background gainsboro*/
        margin-top 10px
        border none
        position relative
        /*background greenyellow*/
        border-bottom 1px solid gainsboro

        .bbb2
          width 100%
          height 100%
          float left
          font-size 13px
          margin-left 5px
          background:none
          outline:none
          border:0
      .isbt2
        width 90%
        height 40px
        left 0
        right 0
        margin auto
        font-size 12px
        color red
        line-height 40px
      .logo1msg2
        width 90%
        height 60px
        /*background yellowgreen*/
        left 0
        right 0
        margin auto
        text-align center
        span
          line-height 60px
          color #7f7f7f
          font-size 14px
        .msgleft2
          margin-right 250px


      .phonelogin2
        width 90%
        height 55px
        background #b4282d
        left 0
        right 0
        margin auto
        border-radius 2px
        text-align center
        color #cb7a7a
        vertical-align middle
        font-size 16px
        & span
          line-height 55px
      .msglogin2
        width 90%
        height 55px
        border solid 1px #b4282d
        left 0
        right 0
        margin auto
        margin-top 15px
        border-radius 2px
        text-align center
        line-height 55px
        color #b4282d
        vertical-align middle
        font-size 15px
        & span
          line-height 55px















</style>
