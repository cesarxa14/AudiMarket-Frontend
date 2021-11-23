<template>
  <div class="container">
    <h1>My Publications</h1>
    <div class="producer-item" v-bind:key="pub.id" v-for="pub in publications">
      <PublicationItem v-bind:pub="pub" />
    </div>
  </div>
</template>

<script>
import MusicalProducerService from '../../musical-producer/services/musical-producer.service';
import PublicationItem from "./publication-item";
export default {
  name: "publication-list",
  components: {PublicationItem},
  data: () => ({
    publications: []
  }),
  methods: {
    getPublicationsByMProducer() {
      MusicalProducerService.getPublicationsById(1)
          .then((response) => {
            console.log(response.data)
            response.data.map(x =>{
              x.publicationDate = x.publicationDate.split('T')[0]
            })
            this.publications = response.data
          })
    }
  },
  mounted() {
    this.getPublicationsByMProducer();
  }
}
</script>

<style scoped>

.container{
  margin: 2%;
  padding: 2%;
  /*border: 2px solid red;*/
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;
}

</style>