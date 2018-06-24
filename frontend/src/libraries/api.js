import axios from 'axios'
import appConfig from '../../config/appConfig'

export let handleError = (err) => {
  console.warn('err: ', err);
  throw Error;
}

let parseJSON = (json) => { return (json && json.data) ? json.data : null; }

export default class Api {
  api = null

  constructor(){
    this.api = function() {
      return axios.create({
        baseURL: (process.env.NODE_ENV === 'development') ? appConfig.apiEndpointLocal : appConfig.apiEndpointRemote,
        timeout: 5000
      })
    }();
  }

  getVideos(){
    return this.api.get('videos')
      .then(parseJSON)
      .catch(handleError)
  }

  updateVideos(data){
    return this.api.post('videos')
      .then(parseJSON)
      .catch(handleError)
  }

  azure(data){
    // let azur = axios.create({
    //   baseURL: 'https://westus.api.cognitive.microsoft.com/spid/v1.0/',
    //   timeout: 10000,
    //   headers: { "Content-Type": "application/octet-stream",
    //              "Ocp-Apim-Subscription-Key": "fc82178ba3e44c24b042843fc52f9ad9"
    //   }
    // });
    //
    // return azur({
    //   method: 'POST',
    //   url: 'identify?identificationProfileIds=55b8e588-594a-4d97-a4ec-41a3523b442e,96cf9c0e-37d2-4fa4-96e8-dbf9421af583&shortAudio=false',
    //   data: {}
    // })
    //   .then(parseJSON)
    //   .catch(handleError)
  }

  // post(data){
  //   return this.api.post('post', data)
  //     .then(parseJSON)
  //     .catch(handleError)
  // }
  //
  // put(data){
  //   return this.api.put('put', data)
  //     .then(parseJSON)
  //     .catch(handleError)
  // }
  //
  // delete(){
  //   return this.api.get('delete')
  //     .then(parseJSON)
  //     .catch(handleError)
  // }
}
