<template>
  <div>
    <v-app-bar
        color="deep-purple accent-4"
        dense
        dark
    >
<!--      <v-app-bar-nav-icon></v-app-bar-nav-icon>-->
      <img style="height: 45px; width: 45px" src="../../../assets/logo.png">
      <v-toolbar-title >
        <v-btn  to="/" color="white">
          AudiMarket
        </v-btn>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn plain to="/musical-producers" color="white">
        Top Producers
      </v-btn>
      <v-btn plain to="/anuncios" color="white">
        Anuncios
      </v-btn>

      <v-btn plain to="/perfil" color="white">
        Perfil
        <v-icon>mdi-account</v-icon>
      </v-btn>

<!--      <v-menu left bottom>-->
<!--        <template v-slot:activator="{ on, attrs }">-->
<!--          <v-btn icon v-bind="attrs" v-on="on">-->
<!--            <v-icon>mdi-dots-vertical</v-icon>-->
<!--          </v-btn>-->
<!--        </template>-->

<!--        <v-list>-->
<!--          <v-list-item v-for="n in 5" :key="n" @click="() => {}">-->
<!--            <v-list-item-title>Option {{ n }}</v-list-item-title>-->
<!--          </v-list-item>-->
<!--        </v-list>-->
<!--      </v-menu>-->
    </v-app-bar>
  </div>

</template>

<script>
export default {
  name: "header"
}
</script>

<style scoped>

</style>