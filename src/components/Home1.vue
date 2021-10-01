<template>

  <div class="container">

    <div class="img-container">
      <img class="img-portada" src="../assets/portada.jpg" alt="">
    </div>
    <div style="text-align: left; margin-top: 20px">
      <h1>Recomendaciones</h1>
    </div>
    <div class="producer-item" v-bind:key="producer.id" v-for="producer in producers">
      <ProducerItem v-bind:producer="producer" />
    </div>
  </div>
</template>

<script>
import ProducerItem from "./producer-item";
import MusicalProducerService from '../plugins/musical-producer/services/musical-producer.service';

export default {
  name: "Home1",
  components: { ProducerItem},
  data: () => ({
    producers: []
  }),
  methods: {
    getMusicalProducers() {
      MusicalProducerService.getAll()
      .then((response) => {
        console.log('musicaleessss',response.data)
        this.producers = response.data
      })
      .catch( e => {
        console.log(e)
      })
    }
  },
  mounted() {
    this.getMusicalProducers();
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