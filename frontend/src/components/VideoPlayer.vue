<template>
  <div class="video-player">
    <div class="video-container">
      <!--<iframe width="640" height="360" :src="this.activeVideo.youtubeURL" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>-->
      <!--<h3>{{this.activeVideo.title}}</h3>-->
      <!--<div class="row">-->
        <!--<p>{{this.activeVideo.views}} views</p>-->
        <!--<p>{{this.activeVideo.likes}} <button @click="addLike">Like</button></p>-->
      <!--</div>-->

      <div v-if="remount" class="video-container">
        <video controls autoplay width="640" height="360">
          <source :src="this.activeVideo.src"  type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>
    </div>


    <div class="video-list">
      <div @click="chooseVideo(video)" :key="video.id" v-for="video in videos" class="thumbnail">
        <div class="thumbnail-img">
          <img :src="video.thumbnail" />
        </div>
        <div class="thumbnail-info">
          <h3>{{video.title}}</h3>
          <p>{{video.creator}}</p>
          <p>{{video.src}}</p>
          <p class="thumbnail-views">{{video.views}} Views</p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import Vue from 'vue';
import video0 from '../../videos/Five_Finger_Death_Punch_-_I_Apologize.mp4';
import video1 from '../../videos/Five_Finger_Death_Punch_-_Remember_Everything.mp4';
import video2 from '../../videos/Five_Finger_Death_Punch_-_Wrong_Side_Of_Heaven.mp4';
import video3 from '../../videos/Rise_Against_-_Hero_Of_War.mp4';
import video4 from '../../videos/Rise_Against_-_Savior.mp4';
let videos = [
  {
    id: 1,
    title: "Five Finger Death Punch - I Apologize",
    thumbnail:
      "https://i.ytimg.com/vi/OzvasAJIHb4/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&amp;rs=AOn4CLB0MdnNeKeo8Cb6YnAeh7SIGxPdXA",
    youtubeURL: "https://www.youtube.com/embed/jn9mHzXJIV0",
    src: video0,
    creator: "Five Finger Death Punch",
    likes: 0,
    views: 0
  },
  {
    id: 2,
    title: "Five Finger Death Punch - Remember Everything",
    thumbnail:
      "https://i.ytimg.com/vi/7G8QItjTSDA/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&amp;rs=AOn4CLD1Qmmzq5lZfcU02UKgs2deWnS4Hg",
    youtubeURL: "https://www.youtube.com/embed/UIwdCN4dV6w",
    // src: "./videos/Five_Finger_Death_Punch_-_Wrong_Side_Of_Heaven.mp4",
    src: video1,
    creator: "Five Finger Death Punch",
    likes: 0,
    views: 0
  },
  {
    id: 3,
    title: "Five Finger Death Punch - Wrong Side Of Heaven",
    thumbnail:
      "https://i.ytimg.com/vi/o_l4Ab5FRwM/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&amp;rs=AOn4CLBixedk5FaRixvMcRuY1JGkbhIM2A",
    youtubeURL: "https://www.youtube.com/embed/ctx4YBEdOxo",
    src: video2,
    creator: "Five Finger Death Punch",
    likes: 0,
    views: 0
  },
  {
    id: 4,
    title: "Rise Against - Hero Of War",
    thumbnail:
      "https://i.ytimg.com/vi/_DboMAghWcA/hqdefault.jpg?sqp=-oaymwEWCMQBEG5IWvKriqkDCQgBFQAAiEIYAQ==&amp;rs=AOn4CLDJfl24EJDR4ePRPssEV4QCcc4ipQ",
    youtubeURL: "https://www.youtube.com/embed/ctx4YBEdOxo",
    src: video3,
    creator: "Rise Against",
    likes: 0,
    views: 0
  },
  {
    id: 5,
    title: "Rise Against - Savior",
    thumbnail:
      "https://i.ytimg.com/vi/e8X3ACToii0/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&amp;rs=AOn4CLAMMebg85xca6dC-LXlWCjyhY2a0w",
    youtubeURL: "https://www.youtube.com/embed/ctx4YBEdOxo",
    src: video4,
    creator: "Rise Against",
    likes: 0,
    views: 0
  }
];

export default {
  name: 'VideoPlayer',
  data () {
    return {
      videos,
      activeVideo: videos[1],
      remount: true
    }
  },
  methods:{
    chooseVideo(video){
      //SET VIDEO AS ACTIVE VIDEO
      this.activeVideo = video;
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

<style scoped>
  .thumbnail{
    display:flex;
  }
  .thumbnail img{
    width:168px;
  }

  .thumbnail-info{
    margin-left:20px;
  }

  .thumbnail h3{
    font-size:16px;
  }

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
