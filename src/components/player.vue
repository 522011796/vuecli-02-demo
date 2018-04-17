<template>
  <div>
    <aplayer ref="player" style="position: fixed;bottom:50px;z-index:99999;margin:0;width: 100%" autoplay :music="{
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
export default {
  components:{
    Aplayer
  },
  data () {
    return {
      author:'',
      musicSource:'',
      pic:'',
      lrc:'',
      musicPic:''
    }
  },
  methods:{

  }
}
</script>
