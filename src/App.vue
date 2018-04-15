<template>
  <div class="wrap">
    <router-view></router-view>
    <tabbar style="position: relative;">
      <tabbar-item>
        <i slot="icon" class="fa fa-home"></i>
        <span slot="label">Wechat</span>
      </tabbar-item>
      <tabbar-item show-dot>
        <i slot="icon" class="fa fa-home"></i>
        <span slot="label">Message</span>
      </tabbar-item>
      <tabbar-item selected>
        <i slot="icon" class="fa fa-home"></i>
        <span slot="label">Explore</span>
      </tabbar-item>
      <tabbar-item>
        <i slot="icon" class="fa fa-home"></i>
        <span slot="label">News</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem, Group, Cell, XHeader, Tab, TabItem, Swiper, SwiperItem } from 'vux'

export default {
  name: 'app',
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
  data() {
    return {

    }
  },
  created(){
    this.$router.push('/music');
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

body {
  background-color: #fbf9fe;
}
html,body{height:100%;}
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
