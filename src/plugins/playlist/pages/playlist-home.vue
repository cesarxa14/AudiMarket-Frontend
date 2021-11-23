<template>

  <div class="container">
    <div style="text-align: left; margin-top: 20px">
      <h1>PlayLists {{ this.$route.params.idProducer}}</h1>
    </div>
    <div class="playlist-item" v-bind:key="playlist.id" v-for="playlist in playlists">
      <PlayListItem v-bind:playlist="playlist" />
    </div>
  </div>
</template>

<script>
import PlayListItem from "./playlist-item";
//import PlayListService from '../services/playlist.service'
import MusicalProducerService from '../../musical-producer/services/musical-producer.service'


//import PlayListService from "../services/playlist.service";

export default {
  name: "playlist-home",
  components: { PlayListItem },
  data: () => ({
    playlists: []
  }),
  methods: {
    getPlayListById() {
      MusicalProducerService.getPlayListsById(this.$route.params.idProducer)
          .then((response) =>{
            console.log(response.data)
            this.playlists = response.data
          })
    }
  },
  mounted() {
    console.log(this.$route.params)
    this.getPlayListById(this.$route.params.idProducer)
  }
}
</script>

<style scoped>
.container{
  margin-top: 20px;
  /*border: 2px solid red;*/
}
.img-portada{
  height: 300px;
  width: 100%;
}

.img-container{
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}
</style>