<template>
  <div class="container">
    <div class="container-avatar">

      <img class="img-avatar" src="../assets/user.png" alt="">
    </div>
    <div class="container-detalles">
      <div class="item1">
        <p>{{ producer.name }}</p>
      </div>
      <div class="item2">
<!--        <p>Ver proyectos</p>-->
        <router-link :to="{name:'Projects', params: {idProducer: producer.id}}">
          <v-btn plain color="primary">
            Ver proyectos
          </v-btn>
        </router-link>

      </div>
      <div class="item3">
        <v-btn icon color="deep-orange">
          <v-icon>mdi-thumb-up</v-icon>
        </v-btn>

        <v-btn icon color="deep-orange">
          <v-icon>mdi-comment</v-icon>
        </v-btn>

      </div >
      <div class="item4">
        <v-rating readonly color="primary"  length="5" size="20" :value="producer.rating" ></v-rating>
      </div>
    </div>
    <div class="container-btn">
      <div>
        <v-btn elevation="4" >
          Contratar
        </v-btn>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "producer-item",
  props: [
      "producer"
  ]
}
</script>

<style scoped>
.container{
  display: grid;
  grid-template-columns: 20% 60% 20%;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
}
.img-avatar{
  width: 90%;
  height: 90%;
}
.container-detalles{
  /*border: 2px solid green;*/
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  text-align: left;
}
.item1{
  font-size: 20px;
}
.container-btn{
  align-self: center;
}
</style>