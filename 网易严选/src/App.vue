<template>
  <div id="app">

    <router-view />

    <FooterGuide v-show="$route.meta.showFooter"/>


  </div>
</template>

<script>
  // 1.引入组件
  import FooterGuide from './components/FooterGuide/FooterGuide.vue'

  import axios from 'axios'

  export default {

    mounted(){
      this.$store.dispatch('getFocusList')
    },
    //2.映射标签
    components: {

      FooterGuide

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    width 100%
    height 100%

</style>
