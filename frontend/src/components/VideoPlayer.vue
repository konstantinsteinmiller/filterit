<template>
  <div class="video-player">
    <div class="video-container">
      <!--<div v-if="remount" class="video-container">-->
        <!--<video controls autoplay width="640" height="360">-->
          <!--<source :src="this.activeVideo.src"  type="video/mp4">-->
          <!--Your browser does not support the video tag.-->
        <!--</video>-->
      <!--</div>-->
      <!--<div v-if="remount" class="video-container">-->
        <!--<video controls autoplay width="640" height="360">-->
          <!--<source :src="activeVideo.id"  type="video/mp4">-->
          <!--Your browser does not support the video tag.-->
        <!--</video>-->
      <!--</div>-->

      <youtube v-if="remount"
               :player-vars="{ autoplay: 1 }"
               :video-id="activeVideo.id"
               player-width="800"
               player-height="600"></youtube>
    </div>


    <div class="video-list">
      <div @click="chooseVideo(video, true)"
           :key="video.id"
           v-for="video in vids"
           class="thumbnail"
           v-if="video && video.display !== false">
        <div class="thumbnail-img">
          <img :src="video.thumbnail" />
        </div>
        <div class="thumbnail-info">
          <h3>{{video.title}}</h3>
          <p>{{video.creator}}</p>
          <!--<p>{{video.src}}</p>-->
          <p class="thumbnail-views">{{video.views}} Views</p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import Vue from 'vue';

import Api, { handleError } from '../libraries/api'
const api = new Api()

export default {
  name: 'VideoPlayer',
  data () {
    return {
      vids: [],
      remount: true,
      activeVideo: {
        id: 'qD2wi-I3JpY',
        title: "Witziges Katzen Video zum Totlachen 2018 [Witzige Videos/Witzige Tier Videos]",
        thumbnail:
          "https://i.ytimg.com/vi/qD2wi-I3JpY/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&amp;rs=AOn4CLDAC2zgmLIlc8zq_bLP9MBGR6JuPQ",
        youtubeURL: "https://www.youtube.com/embed/qD2wi-I3JpY",
        creator: "Witziges Katzen",
        likes: 0,
        views: 0
      }
    }
  },
  watch: {
    '$route'(o, n){
      this.fetchVideos();
    }
  },
  mounted(){
    this.fetchVideos();
  },
  computed: {
    videoId(){
      return this.$route && this.$route.query && this.$route.query.v
        ? this.$route.query.v : undefined
    }
  },
  methods:{
    fetchVideos(){
      api.getVideos()
        .then((response) => {
          this.vids = response.data;
          if (this.videoId && this.videoId !== '') {

            let foundVideos = this.vids
              .filter((vid) => {
                return vid && vid.id && vid.id === this.videoId}
              )
            console.log('foundVideos', foundVideos)
            this.activeVideo = (foundVideos && foundVideos.length >= 1) ? foundVideos.pop() : this.vids[0];
            this.$forceUpdate();
          }

        })
        .catch(handleError)
    },
    chooseVideo(video, admitted){
      //SET VIDEO AS ACTIVE VIDEO
      // this.activeVideo = video;
      this.$router.push({ query: {v: video.id}})
      this.remount = false;
      //INCREASE THE VIDEOS VIEWS BY 1
      video.views += 1;
      Vue.nextTick(() => {
        this.remount = true;
      })
      
    },
    addLike(){
      this.activeVideo.likes += 1;
    }
  }
}
</script>

<style lang="stylus">
  .thumbnail
    display flex
    text-align left
    &:hover
      cursor pointer
    img
      width 168px

    &-info
      margin-left 20px
    h3
      font-size 16px

  h3,
  p{
    margin:0;
    padding:0;
  }

  .thumbnail-views{
    font-size:14px;
  }
  .video-player{
    display:flex;
    width:1200px;
    margin:auto;
  }

  .video-container{
    margin-right:40px;
  }

  .row{
    display:flex;
    justify-content:space-between;
  }

  button{
    background:#D0021B;
    color:white;
    border:none;
    padding:10px 20px;
  }
</style>
