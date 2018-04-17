<template>
  <div class="wrap">
    123
  </div>
</template>

<script>
  import { Tabbar, TabbarItem, Group, Cell, XHeader, Tab, TabItem, Swiper, SwiperItem, ViewBox } from 'vux'
export default {
  components: {
    Tabbar,
    TabbarItem,
    Group,
    Cell,
    XHeader,
    Tab,
    TabItem,
    Swiper,
    SwiperItem,
    ViewBox

  },
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>

<style>
  html, body {
    height: 100%;
    width: 100%;
    overflow-x: hidden;
  }
  .main{
    overflow-y: auto;
    overflow:auto;/* winphone8和android4+ */
    webkit-overflow-scrolling: touch;
    z-index:1;
    height:100%
  }
</style>
