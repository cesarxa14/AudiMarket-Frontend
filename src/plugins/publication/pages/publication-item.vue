<template>
  <div >
    <div class="item-container">
      <div>
        <h1>{{pub.musicProducer.firstname}} {{pub.musicProducer.lastname}}</h1>
      </div>
      <div>
        <h3>{{pub.description}}</h3>
      </div>
      <div>
        <h4>{{pub.publicationDate}}</h4>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "publication-item",
  props: [
    "pub"
  ],
  methods: {
    formatDate(){
      this.pub.publicationDate = this.pub.publicationDatesplit('T')[0]
    }
  },
  mounted() {

  }
}
</script>

<style scoped>

.item-container{
  /*border: 2px solid red;*/
  margin-top: 20px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

</style>