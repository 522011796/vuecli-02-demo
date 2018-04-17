<template>
  <div class="wrap">
    <div class="header">
      <x-header :left-options="{showBack: false}" >my music</x-header>
    </div>
    <div class="main">
      my music
    </div>
  </div>
</template>

<script>
  import { Tabbar, TabbarItem, Group, Cell, XHeader, Tab, TabItem, Swiper, SwiperItem } from 'vux'
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
    SwiperItem
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
  .wrap{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%;}
  .header,.footer{
    background-color:#D8D8D8;
    text-align:center;
  }
  .main{
    -webkit-box-flex:1;
    -webkit-flex:1;
    -ms-flex:1;
    flex:1;
    width:100%;
    overflow:auto;/* winphone8和android4+ */
    -webkit-overflow-scrolling: touch; /* ios5+ */
  }
</style>
