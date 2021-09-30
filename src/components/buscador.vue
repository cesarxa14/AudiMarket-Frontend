<!--<input type="text" v-model="buscar" class="form-control" placeholder="Ejemplo: Rock"/>-->

<!--<template>-->
<!--  <div class="container">-->
<!--    <div class="row">-->
<!--      <div class="col-md-12">-->
<!--        <div class="table-responsive">-->

<!--          <table class="table">-->
<!--            <thead class="thead-dark">-->
<!--            <tr>-->
<!--              <th scope="col">ID</th>-->
<!--              <th scope="col">Nombre</th>-->
<!--              <th scope="col">NumeroCanciones</th>-->
<!--            </tr>-->
<!--            </thead>-->
<!--            <tbody>-->
<!--            <tr v-for="item in items" v-bind:key="item.id">-->
<!--              <th scope="row">{{ item.id }}</th>-->
<!--              <td>{{ item.name }}</td>-->
<!--              <td>{{ item.numberSongs }}</td>-->
<!--              <td><img v-bind:src="'img/' + item.img" class="img-fluid" width="30px" v-bind:alt="item.name"></td>-->
<!--            </tr>-->
<!--            </tbody>-->
<!--          </table>-->

<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->

<!--<tbody>-->
<!--<tr v-for="item in items" v-bind:key="item.id">-->
<!--  <th scope="row">{{ item.id }}</th>-->
<!--  <td>{{ item.id }}</td>-->
<!--  <td>{{ item.name }}</td>-->
<!--  <td>{{ item.numberSongs }}</td>-->
<!--  <td><img v-bind:src="'img/' + item.img" class="img-fluid" width="30px" v-bind:alt="item.name"></td>-->
<!--</tr>-->
<!--</tbody>-->

<!--<script>-->
<!--import datos from "../assets/json/DatosGenero.json";-->

<!--export default {-->
<!--  name: 'Buscador',-->
<!--  props: {-->
<!--    msg: String-->
<!--  },-->

<!--  data() {-->
<!--    return {-->
<!--      buscar: ''-->
<!--    }-->
<!--  },-->

<!--  computed: {-->
<!--    items() {-->
<!--      return datos.map((item) => {-->
<!--        return item;-->
<!--      });-->
<!--    },-->
<!--  }-->

<!--}-->
<!--</script>-->