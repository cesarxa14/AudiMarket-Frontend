<template>
  <div>
    <h1>PROJECTS {{ this.$route.params.idProducer}}</h1>
  </div>
</template>

<script>
import MusicalProducerService from '../plugins/musical-producer/services/musical-producer.service';
export default {
  name: "projects-by-producer",
  methods: {
    getProjectsById() {
      MusicalProducerService.getProjectsById(1)
      .then((response) =>{
        console.log(response.data)
      })
    }
  },
  created() {
    console.log(this.$route.params)
    this.getProjectsById(this.$route.params.idProducer)
  }
}
</script>

<style scoped>

</style>