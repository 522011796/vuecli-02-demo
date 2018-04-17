<template>
  <div class="wrap" style="color:#ffffff;overflow-x:hidden;height:100%;overflow-y: auto;-webkit-overflow-scrolling: touch;position: relative">
    <div style="position: relative">
      <div :style="{backgroundImage: 'url(' + backgroundImg + ')',width:'100%',height:'215px',position: 'absolute',top:0,webkitFilter: 'blur(2px)'}">

      </div>
      <div style="position: absolute;top:10px;z-index:9999">
        <div style="padding:0px 10px;">
          <flexbox>
            <flexbox-item :span="2">
              <div class="flex-demo"><router-link to="/music"> <i class="fa fa-angle-left fa-2x" style="color:#ffffff;width: 20px"></i> </router-link></div>
            </flexbox-item>
            <flexbox-item :span="8" style="text-align: center">
              <div class="flex-demo" style="text-overflow:ellipsis;white-space:nowrap;overflow:hidden;width:200px;">{{name}}</div>
            </flexbox-item>
            <flexbox-item :span="2" style="text-align: center">
              ...
            </flexbox-item>
          </flexbox>
        </div>
        <flexbox>
          <flexbox-item :span="4" style="padding-top:0px;padding-left:10px;">
            <div class="flex-demo">
              <img :src="coverImgUrl" style="height:100%;width: 100%">
            </div>
          </flexbox-item>
          <flexbox-item>
            <div class="flex-demo">
              <div>{{name}}</div>
              <div>
                <span><img :src="avatarUrl" style="height:25px;width:25px;border-radius:25px;"/></span>
                <span style="position: relative;top:-8px;font-size:12px;">{{nickname}}</span>
              </div>
            </div>
          </flexbox-item>
        </flexbox>
        <flexbox style="width: 85%;margin:0 auto;">
          <flexbox-item>
            <div class="flex-demo" style="text-align: center">
              <div><i class="fa fa-folder-o" style="font-size: 20px"></i></div>
              <div style="font-size: 12px;position:relative;top:-5px;">{{folderNum}}</div>
            </div>
          </flexbox-item>
          <flexbox-item>
            <div class="flex-demo" style="text-align: center">
              <div><i class="fa fa-file-text-o" style="font-size: 20px"></i></div>
              <div style="font-size: 12px;position:relative;top:-5px;">{{fileNum}}</div>
            </div>
          </flexbox-item>
          <flexbox-item>
            <div class="flex-demo" style="text-align: center">
              <div><i class="fa fa-share-square" style="font-size: 20px"></i></div>
              <div style="font-size: 12px;position:relative;top:-5px;">{{shareNum}}</div>
            </div>
          </flexbox-item>
          <flexbox-item>
            <div class="flex-demo" style="text-align: center">
              <div><i class="fa fa-cloud-download" style="font-size: 20px"></i></div>
              <div style="font-size: 12px;position:relative;top:-5px;">下载</div>
            </div>
          </flexbox-item>
        </flexbox>
      </div>
    </div>
    <div style="position: absolute;top:220px;left:0;z-index: 99999;color:#555555;width: 100%;margin:0;padding:0;padding-bottom:0px;">
      <ul>
        <li @click="playMusic(item.id,item.artists[0].name)" v-for="(item, index) in musicList" style="border-bottom:1px solid #dddddd;padding:10px 10px 25px 10px">
          <div style="float: left;font-size:12px;">
            <div style="font-size: 14px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;width:200px;">{{item.name}}<span style="color:#999999;font-size:12px;">({{item.album.alias[0]}})</span></div>
            <div style="text-overflow:ellipsis;white-space:nowrap;overflow:hidden;width:200px;">{{item.artists[0].name}} - {{item.name}}</div>
          </div>
          <div style="float: right">
            <i class="fa fa-play-circle-o"></i>
          </div>
        </li>
      </ul>
    </div>
    <aplayer v-if="flag" ref="player" style="position: fixed;bottom:0px;z-index:99999;margin:0;width: 100%" autoplay :music="{
        title: '',
        author: author,
        url: musicSource,
        pic: musicPic,
        lrc: ''
        }">
    </aplayer>
  </div>
</template>

<script>
import Aplayer from 'vue-aplayer'
import { Tabbar, TabbarItem, Group, Cell, XHeader, Tab, TabItem, Swiper, SwiperItem, Flexbox, FlexboxItem } from 'vux'
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
    Flexbox,
    FlexboxItem,
    Aplayer
  },
  created(){
    this.getData();
  },
  data () {
    return {
      id: this.$route.params.id,
      coverImgUrl:'',
      name:'',
      nickname:'',
      avatarUrl:'',
      backgroundImg:'',
      folderNum:0,
      fileNum:0,
      shareNum:0,
      musicList:[],
      musicSource:'',
      musicPic:'',
      author:'',
      flag:false,
    }
  },
  methods: {
    getData() {
      this.$api.get('/playlist/detail?id=' + this.id, null, r => {
        this.coverImgUrl = r.result.coverImgUrl;
        this.name = r.result.name;
        this.nickname = r.result.creator.nickname;
        this.avatarUrl = r.result.creator.avatarUrl;
        this.backgroundImg = r.result.creator.backgroundUrl;
        this.folderNum = r.result.subscribedCount;
        this.fileNum = r.result.commentCount;
        this.shareNum = r.result.shareCount;
        this.musicList = r.result.tracks;
      })
    },
    playMusic(id,name) {
      this.$api.get('/music/url?id=' + id, null, r => {
        this.musicSource = r.data[0].url;
        this.author = name;
        this.flag = true;
      });
    }
  }
}
</script>

<style scoped>
  a{
    color:#333333;
  }
</style>
