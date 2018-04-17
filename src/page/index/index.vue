<template>
  <div class="wrap">
    <div>
      <x-header :left-options="{showBack: false}" >do not show Back</x-header>
    </div>
    <tab>
      <tab-item selected @on-item-click="music">发现音乐</tab-item>
      <tab-item @on-item-click="diantai">主播电台</tab-item>
    </tab>
    <div class="main">
      <router-view style="height: calc(100% + 1px)"></router-view>
    </div>
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
    music: function(){
      this.$router.push('/music');
    },
    diantai: function(){
      this.$router.push('/diantai');
    }
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
