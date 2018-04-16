<template>
  <div>
    <div>
      <swiper :aspect-ratio="300/800">
        <swiper-item class="swiper-demo-img" v-for="(item, index) in list" :key="index">
          <img :src="item">
        </swiper-item>
      </swiper>
    </div>
    <div>
      <group>
        <cell title="Cell" value="value" link="/detail" is-link></cell>
        <cell title="Cell" value="value" is-link></cell>
        <cell title="Cell" value="value" is-link></cell>
        <cell title="Cell" value="value" is-link></cell>
        <cell title="Cell" value="value" is-link></cell>
        <cell title="Cell" value="value" is-link></cell>
        <cell title="Cell" value="value" is-link></cell>
        <cell title="Cell" value="value" is-link></cell>
        <cell title="Cell" value="value" is-link></cell>
        <cell title="Cell" value="value" is-link></cell>
        <cell title="Cell" value="value" is-link></cell>
        <cell title="Cell" value="value" is-link></cell>
        <cell title="Cell" value="value" is-link></cell>
      </group>
    </div>
  </div>
</template>

<script>
import { Tabbar, TabbarItem, Group, Cell, XHeader, Tab, TabItem, Swiper, SwiperItem } from 'vux'
const imgList = [
  'http://placeholder.qiniudn.com/800x300/FF3B3B/ffffff',
  'http://placeholder.qiniudn.com/800x300/FFEF7D/ffffff',
  'http://placeholder.qiniudn.com/800x300/8AEEB1/ffffff'
]
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
      list: imgList,
    }
  }
}
</script>

<style scoped>
  .swiper-demo-img img {
    width: 100%;
  }
</style>
