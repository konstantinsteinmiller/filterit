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
      <div @click="chooseVideo(video, true)" :key="video.id" v-for="video in videos" class="thumbnail">
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


let videos = [
  {
    id: 'bfTOOpGr7Vw',
    title: "Teletabbies - Alle hatten ihre Lieblingssachen dabei",
    thumbnail:
      "https://img.youtube.com/vi/bfTOOpGr7Vw/default.jpg",
    youtubeURL: "https://www.youtube.com/embed/bfTOOpGr7Vw",
    creator: "Teletabbies",
    likes: 0,
    views: 0
  },{
    id: '7G8QItjTSDA',
    title: "Five Finger Death Punch - I Apologize",
    thumbnail:
      "https://i.ytimg.com/vi/OzvasAJIHb4/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&amp;rs=AOn4CLB0MdnNeKeo8Cb6YnAeh7SIGxPdXA",
    youtubeURL: "https://www.youtube.com/embed/jn9mHzXJIV0",
    creator: "Five Finger Death Punch",
    likes: 0,
    views: 0
  },{
    id: 'ZbZSe6N_BXs',
    title: "Pharrell Williams - Happy",
    thumbnail:
      "https://i.ytimg.com/vi/JRMOMjCoR58/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&amp;rs=AOn4CLDYO17BuSTD_XxF_-u_T2fp2qVYRQ",
    youtubeURL: "https://www.youtube.com/embed/ZbZSe6N_BXs",
    creator: "Pharrell Williams",
    likes: 0,
    views: 0
  },
  {
    id: '7G8QItjTSDA',
    title: "Five Finger Death Punch - Remember Everything",
    thumbnail:
      "https://i.ytimg.com/vi/7G8QItjTSDA/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&amp;rs=AOn4CLD1Qmmzq5lZfcU02UKgs2deWnS4Hg",
    youtubeURL: "https://www.youtube.com/embed/7G8QItjTSDA",
    creator: "Five Finger Death Punch",
    likes: 0,
    views: 0
  },
  {
    id: 'o_l4Ab5FRwM',
    title: "Five Finger Death Punch - Wrong Side Of Heaven",
    thumbnail:
      "https://i.ytimg.com/vi/o_l4Ab5FRwM/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&amp;rs=AOn4CLBixedk5FaRixvMcRuY1JGkbhIM2A",
    youtubeURL: "https://www.youtube.com/embed/o_l4Ab5FRwM",
    creator: "Five Finger Death Punch",
    likes: 0,
    views: 0
  },
  {
    id: '_DboMAghWcA',
    title: "Rise Against - Hero Of War",
    thumbnail:
      "https://i.ytimg.com/vi/_DboMAghWcA/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&amp;rs=AOn4CLCyNsjbwvVsIs8E5mTyRdIbC4Vccw",
    youtubeURL: "https://www.youtube.com/embed/_DboMAghWcA",
    creator: "Rise Against",
    likes: 0,
    views: 0
  }
];

// let selectedVideos = [];

let uploadableVideos = [
  {
    id: 'u8G10UCVonM',
    title: "Lustige kurze Videos",
    thumbnail:
      "https://img.youtube.com/vi/u8G10UCVonM/default.jpg",
    youtubeURL: "https://www.youtube.com/embed/u8G10UCVonM",
    creator: "Lustige kurze Videos",
    likes: 0,
    views: 0
  }
];

export default {
  name: 'VideoPlayer',
  props: {
    activeVideo: {
      type: Object,
      default: videos[1]
    },
  },
  data () {
    return {
      videos,
      remount: true
    }
  },
  methods:{
    chooseVideo(video, admitted){
      //SET VIDEO AS ACTIVE VIDEO
      this.activeVideo = video;
      this.remount = false;
      //INCREASE THE VIDEOS VIEWS BY 1
      video.views += 1;
      Vue.nextTick(() => {
        this.remount = true;
      })


      if (admitted && videos.every( vid => {
          return vid.id !== uploadableVideos.id
        }))
      {
        Vue.set(videos, videos.length, uploadableVideos[0]);
      }
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
