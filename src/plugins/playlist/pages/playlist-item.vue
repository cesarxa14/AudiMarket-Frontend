<template>
  <div class="container">

    <div class="container-disc">

      <img class="img-disc" src="../../../assets/disc.png" alt="">
    </div>

      <div class="container-detalles">
      <div class="item1">
        <h1>{{ playlist.description }}</h1>
        <p>{{ playlist.id }}</p>
      </div>

      <div class="item2">
        <!--        <p>Ver proyectos</p>-->
        <router-link :to="{name:'Projects', params: {idPlayList: playlist.id}}">
          <v-btn plain color="primary">
            View Projects
          </v-btn>
        </router-link>

      </div>

      </div>
      <div class="item3">
        <v-btn icon color="deep-orange">
          <v-icon>mdi-thumb-up</v-icon>
        </v-btn>

        <v-btn icon color="deep-orange">
          <v-icon>mdi-comment</v-icon>
        </v-btn>

      </div >

    </div>

</template>

<script>

export default {
  name: "playlist-item",
  props: [
      "playlist"
  ]
}
</script>

<style scoped>
.container{
  height: auto;
  display: grid;
  grid-template-columns: 20% 60% 20%;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
}
.img-disc{
  width: 120px;
  height: 120px;
}
.container-detalles{
  /*border: 2px solid green;*/
  display: grid;
  grid-template-rows: 1fr 1fr;
  text-align: left;
}
.item1{
  font-size: 20px;
}
</style>