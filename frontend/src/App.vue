<template>
  <div id="app">
    <v-app id="inspire" white>
      <v-navigation-drawer
        clipped
        fixed
        v-model="drawer"
        app
      >
        <v-list dense>
          <v-list-tile @click="">
            <v-list-tile-action>
              <v-icon>dashboard</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title><router-link class="app__navigation-link" :to="{ path: '/'/*, name: 'Homepage' */}">Homepage</router-link></v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile @click="">
            <v-list-tile-action>
              <v-icon>file_upload</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title><router-link class="app__navigation-link" :to="{ name: 'Upload' }">Upload</router-link></v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

        </v-list>
      </v-navigation-drawer>
      <v-toolbar app fixed clipped-left>
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <div class="page__logo">
          <img src="/filterit/static/Logo_FilterIt.png" class="page__logo-image">
        </div>
        <v-toolbar-items class="hidden-sm-and-down page__search">
          <span  class="hidden-xs-only">
            <v-text-field
              class="page__toolbar-search-input"
              name="search-input"
              label="Search"
              value=""
            ></v-text-field>
          </span>
        </v-toolbar-items>
        <v-icon style="margin-left: -1em"
                @click="searchForVideos">search</v-icon>

        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">

          <v-icon class="page__toolbar-upload-button"
                  @click="$router.push({name: 'Upload'})">file_upload</v-icon>
          <v-icon class="page__toolbar-user">perm_identity</v-icon>
        </v-toolbar-items>

      </v-toolbar>
      <v-content>
        <v-container fluid fill-height>
          <v-layout justify-center align-center>
            <v-flex shrink>

              <router-view/>

            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
      <v-footer app fixed>
        <span>filterIt &copy; 2018</span>
      </v-footer>
    </v-app>
  </div>
</template>

<script>
  import VueYouTubeEmbed from 'vue-youtube-embed'
  import Vue from 'vue'
  Vue.use(VueYouTubeEmbed)

  export default {
    name: 'App',
    data(){
      return {
        appName: 'FilterIt',
        drawer: false
      }
    },
    props: {

    },
    mounted(){
      document.title = this.appName;
    },
    methods: {
      searchForVideos(){
        console.log("searchForVideos")
      }
    }
  }
</script>

<style lang="stylus">
  #app
    font-family Arial, 'Avenir', Helvetica, sans-serif
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale
    text-align center
    color #2c3e50
    .app__navigation-link
      text-decoration none

    .page
      width 90%
      padding 0 auto
      /*margin 5em auto*/
      margin auto
      height auto
      min-height 98vh
      box-shadow 0 0 1em 3px lightgrey
      &__logo
        /*margin-top 5em*/
        display: block
        width auto
        height 66px
        overflow hidden
        &-image
          float left
          width 200px
          text-align left
          display inline-block
          z-index -1
      &__toolbar
        &-upload-button
          margin 0 1em
          &:hover
            cursor pointer
        &-user
          &:hover
            cursor pointer
        &-search-input
          padding-right 2em
          margin-right 2em
      &__search
        > *
          margin-left 4em
          width 30em


</style>
