<template>
  <div style="height: 100%;width: 100%">
    <!--<div style="position: fixed;top:0;background: #00f;height:50px;width: 100%">

    </div>-->
    <div :style="{position: 'fixed',bottom:!$defines.show?50+'px':0+'px',top:0,width: '100%',overflowY: 'auto',webkitOverflowScrolling: 'touch'}">
      <router-view></router-view>
    </div>
    <div v-if="!$defines.show" style="position: fixed;bottom:0;background: #000;height:50px;width: 100%">
      <tabbar>
        <tabbar-item link="/music">
          <i slot="icon" class="fa fa-home"></i>
          <span slot="label">{{$defines.show}}</span>
        </tabbar-item>
        <tabbar-item link="/myMusic" show-dot>
          <i slot="icon" class="fa fa-music"></i>
          <span slot="label">Message</span>
        </tabbar-item>
        <tabbar-item selected>
          <i slot="icon" class="fa fa-video-camera"></i>
          <span slot="label">Explore</span>
        </tabbar-item>
        <tabbar-item>
          <i slot="icon" class="fa fa-user"></i>
          <span slot="label">News</span>
        </tabbar-item>
      </tabbar>
    </div>
  </div>
</template>
<!---->
<script>
import Player from './components/player'
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
    SwiperItem,
    Player
  },
  data() {
    return {
      showMusicPlayer : false,
      positionBottom:50
    }
  },
  watch: {
    '$route' (to, from) {
      if(from.name == 'detail'){
        this.$defines.setShow(false);
      }
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
  -webkit-overflow-scrolling: touch;    /* ios5+ */
  z-index:1;
}
</style>
