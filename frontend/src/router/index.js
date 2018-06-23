import Vue from 'vue'
import Router from 'vue-router'
import VideoPlayer from '@/components/VideoPlayer'
import Upload from '@/components/Upload'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'Library'
    },
    {
      path: '/player',
      name: 'VideoPlayer',
      component: VideoPlayer
    },
    {
      path: '/upload',
      name: 'Upload',
      component: Upload
    }
  ]
})
