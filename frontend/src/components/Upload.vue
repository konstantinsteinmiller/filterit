<template>
  <div>

    <v-layout row>
      <v-flex sm12 sm12>

        <v-card>
          <v-alert v-if="alert" :type="alert.type" dismissible v-model="alert">
            {{ alert.text }}
          </v-alert>

          <v-list two-line>
            <v-container grid-list-xl >
              <v-form ref="form" lazy-validation>
                <v-layout row wrap>
                  <v-flex xs12>
                    <div>

                    </div>
                  </v-flex>

                  <vue-dropzone ref="myVueDropzone"
                                id="dropzone"
                                :options="dropzoneOptions"
                                class="upload__dropzone"></vue-dropzone>

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
        url: 'https://httpbin.org/post',
        thumbnailWidth: 150,
        maxFilesize: 40,
        headers: { "My-Awesome-Header": "header value" }
      }
    }
  },
  computed: {

  },
  created() {},
  mounted() {
    document.title = 'Upload Files'
    this.onInit();
  },
  methods: {
    onInit(){
      /* fetch some data maybe */

      // api.get()
      //   .then((response) => {
      //     /* do something with response */
      //   })
      //   .catch(handleError)
    }
  }
}
</script>


<style lang="stylus">
  .upload
    background white
    &__dropzone
      width 100%
</style>
