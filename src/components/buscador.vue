<template>
  <div class="row mt-3">
 
      <div class="col-md-4" v-for="item in items" v-bind:key="item.id"> 
 
        <div class="card mb-3">
          <img class="card-img-top" v-bind:src="'img/' + item.img" v-bind:alt="item.name">
          <div class="card-body">
            <h3 class="card-title mb-3">{{ item.name }}</h3>
            <p class="card-text"><strong>Nombre:</strong> {{ item.name }}</p>
            <p class="card-text"><strong>NumeroCanciones:</strong> {{ item.numberSongs }}</p>
          </div>
        </div>
  </div>
</template>

<script>

import datos from "../server/db.json";

export default {
  name: 'Buscador',
  props: {
    msg: String
  },

data() {
    return {
      buscar: ''
    }
  },

computed: {
    items() {
      return datos.filter(item => {
        return item.nombre.toLowerCase().includes(this.buscar.toLowerCase());
      });
    },

}
</script>

