<template>
  <div style="overflow-y: auto">
    <div>
      <swiper :aspect-ratio="300/800">
        <swiper-item class="swiper-demo-img" v-for="(item, index) in list" :key="index">
          <img :src="item.pic">
        </swiper-item>
      </swiper>
    </div>
    <div>
      <flexbox style="border-bottom: 1px solid #dddddd;padding:3px 0px;">
        <flexbox-item>
          <div class="flex-demo" style="text-align: center">
            <div><i class="fa fa-podcast fa-2x" style="color:#f00;"></i></div>
            <div style="font-size: 12px;color:#f00;">私人FM</div>
          </div>
        </flexbox-item>
        <flexbox-item>
          <div class="flex-demo" style="text-align: center">
            <div><i class="fa fa-calendar fa-2x" style="color:#f00;"></i></div>
            <div style="font-size: 12px;color:#f00;">每日推荐</div>
          </div>
        </flexbox-item>
        <flexbox-item>
          <div class="flex-demo" style="text-align: center">
            <div><i class="fa fa-desktop fa-2x" style="color:#f00;"></i></div>
            <div style="font-size: 12px;color:#f00;">歌单</div>
          </div>
        </flexbox-item>
        <flexbox-item>
          <div class="flex-demo" style="text-align: center">
            <div><i class="fa fa-home fa-2x" style="color:#f00;"></i></div>
            <div style="font-size: 12px;color:#f00;">排行榜</div>
          </div>
        </flexbox-item>
      </flexbox>
    </div>
    <div style="margin-top:10px;">
      <div style="border-left:3px solid #f00;">推荐歌单</div>
      <div>
        <flexbox wrap="wrap" :gutter="0">
          <flexbox-item :span="1/3" v-for="(item, index) in tuijian" :key="index">
            <div style="height:100px;width: 100%" v-on:click="selList(item.id)">
              <img :src="item.picUrl" style="height:100%;width: 100%">
            </div>
            <div style="color: #666666;font-size: 12px;height:35px;">{{item.name}}</div>
          </flexbox-item>
        </flexbox>
      </div>
    </div>
    <div style="margin-top:10px;">
      <div style="border-left:3px solid #f00;">新歌上架</div>
      <div>
        <flexbox wrap="wrap" :gutter="0">
          <flexbox-item :span="1/3" v-for="(item, index) in newList" :key="index">
            <div style="height:100px;width: 100%">
              <img :src="item.picUrl" style="height:100%;width: 100%">
            </div>
            <div style="color: #666666;font-size: 12px;height:35px;">{{item.name}}</div>
          </flexbox-item>
        </flexbox>
      </div>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import { Tabbar, TabbarItem, Group, Cell, XHeader, Tab, TabItem, Swiper, SwiperItem, Grid, GridItem, Flexbox, FlexboxItem, ViewBox } from 'vux'
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
    draggable,
    Grid,
    GridItem,
    Flexbox,
    FlexboxItem,
    ViewBox
  },
  data () {
    return {
      list: [],
      list2:[
        {id:"id1",it:{name:'点击拖动'}},
        {id:"id2",it:{name:'点击拖动'}},
        {id:"id3",it:{name:'点击拖动'}},
        {id:"id4",it:{name:'点击拖动'}}
      ],
      tuijian:[],
      newList:[]
    }
  },
  created(){
    this.getData();
    this.getTuijianData();
    this.getNewData();
  },
  methods: {
    getdata (evt) {
      console.log(evt.draggedContext.element.id)
    },
    datadragEnd (evt) {
      console.log('拖动前的索引 :' + evt.oldIndex);
      console.log('拖动后的索引 :' + evt.newIndex);
    },
    getData(){
      this.$api.get('/banner', null, r => {
        this.list = r.banners;
      })
    },
    getTuijianData(){
      this.$api.get('/personalized?limit=6', null, r => {
        this.tuijian = r.result;
      })
    },
    getNewData(){
      this.$api.get('/top/album?offset=0&limit=6', null, r => {
        this.newList = r.albums;
      })
    },
    selList(id){
      this.$defines.setShow(true);
      this.$router.push('/detail/'+id);
    }
  }
}
</script>

<style>
  .swiper-demo-img img {
    width: 100%;
  }
</style>
