<template>
  <div>
    <h1>Top Rated Music Producers</h1>
    <div class="producer-item" v-bind:key="producer.id" v-for="producer in topProducers">
      <ProducerItem v-bind:producer="producer" />
    </div>
  </div>
</template>

<script>
import MusicalProducerService from '../services/musical-producer.service';
import ProducerItem from "./producer-item";
export default {
  name: "top",
  components: { ProducerItem},
  data: () => ({
    topProducers: []
  }),
  methods: {
    getTopProducers() {
      MusicalProducerService.sortTopProducers()
      .then((response) => {
        console.log(response.data)
        this.topProducers = response.data
      })
    }
  },
  mounted() {
    this.getTopProducers();
  }
}
</script>

<style scoped>
.producer-item {
  margin-top: 30px;
}
</style>