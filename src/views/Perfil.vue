<template>
  <div>
    <Header/>
    <PerfilItem/>
  </div>

</template>

<script>
// @ is an alias to /src


import Header from "../components/header";
import PerfilItem from "../components/perfil-item";

export default {
  name: 'Perfil',
  components: {
    PerfilItem,
    Header
  }
}
</script>