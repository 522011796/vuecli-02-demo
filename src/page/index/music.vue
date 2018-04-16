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
      <draggable :list="list2" :move="getdata" @update="datadragEnd" :options="{animation: 100,handle:'.dargDiv'}">
        <transition-group name="list-complete" >
          <group v-for="element in list2" :key="element.it.name" class="dargDiv">
            <cell :title="element.id" :value="element.it.name"></cell>
          </group>
        </transition-group>
      </draggable>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
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
    SwiperItem,
    draggable
  },
  data () {
    return {
      list: imgList,
      list2:[
        {id:"id1",it:{name:'点击拖动'}},
        {id:"id2",it:{name:'点击拖动'}},
        {id:"id3",it:{name:'点击拖动'}},
        {id:"id4",it:{name:'点击拖动'}}
      ]
    }
  },
  methods: {
    getdata (evt) {
      console.log(evt.draggedContext.element.id)
    },
    datadragEnd (evt) {
      console.log('拖动前的索引 :' + evt.oldIndex);
      console.log('拖动后的索引 :' + evt.newIndex);
    }
  }
}
</script>

<style scoped>
  .swiper-demo-img img {
    width: 100%;
  }
</style>
