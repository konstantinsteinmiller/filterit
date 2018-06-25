<template>
  <div>

    <v-layout row>
      <v-flex sm12 sm12>

        <v-card>
          <v-alert v-if="alert" :type="alert.type" dismissible v-model="alert">
            {{ alert.text }}
          </v-alert>

          <v-list two-line>
            <v-container grid-list-xl class="upload__container" >
              <v-form ref="form" lazy-validation>
                <v-layout row wrap>
                  <v-flex xs12>
                    <div>

                    </div>
                  </v-flex>

                  <vue-dropzone ref="myVueDropzone"
                                id="dropzone"
                                :options="dropzoneOptions"
                                class="upload__dropzone"
                                @vdropzone-file-added="addedFile"
                                @vdropzone-success="checkSuccessful"
                                @vdropzone-error="checkError"></vue-dropzone>

                </v-layout>
              </v-form>
            </v-container>

          </v-list>
        </v-card>

      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import Api, { handleError } from '../libraries/api'
const api = new Api()

import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'

export default {
  name: 'upload',
  components: {
    vueDropzone: vue2Dropzone
  },
  data() {
    return {
      title: 'Upload',
      subTitle: 'Subtitle for page',
      alert: null,
      rules: {
        required: (value) => !!value || 'Required.'
      },
      dropzoneOptions: {
        url: 'http://localhost:5050/api/checkFile',
        thumbnailWidth: 150,
        maxFilesize: 40,
        headers: { "My-Awesome-Header": "header value" }
        // url: 'https://westus.api.cognitive.microsoft.com/spid/v1.0/identify?identificationProfileIds=55b8e588-594a-4d97-a4ec-41a3523b442e&shortAudio=false',
        // thumbnailWidth: 150,
        // maxFilesize: 40,
        // headers: { /*"Content-Type": "application/octet-stream",*/
        //           "Response-Type": "application/json",
        //            "Ocp-Apim-Subscription-Key": "fc82178ba3e44c24b042843fc52f9ad9"
        // }
      }
    }
  },
  mounted() {
    document.title = 'Upload Files'
    this.onInit();
  },
  methods: {
    onInit(){

    },
    addedFile(file){

    },
    checkSuccessful(file, response){
      console.log("checkSuccessful ", /*file, */response)
      this.alert = { type: 'success', text: 'successfully added file.' }
      localStorage.alert = true;

      setTimeout(() => {
        this.$router.push({path: '/player', query: { v: response.vidId } })
      }, 1000)
    },
    checkError(file, message, xhr){
      console.log("checkError ", message)
      this.alert = { type: 'error', text: message.message }
    }
  }
}
</script>


<style lang="stylus">
  .upload
    background white
    &__dropzone
      width 100%
      height 100%
      min-height 530px
    &__container
      min-height 600px
      height 100%
      width 100%
</style>
