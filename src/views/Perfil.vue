<template>
  <div>
    <Header/>
    <PerfilItem/>
  </div>

</template>

<script>
// @ is an alias to /src


import Header from "../plugins/general/pages/header";
import PerfilItem from "../plugins/user/pages/perfil-item";
export default {
  name: 'Perfil',
  components: {
    PerfilItem,
    Header

  }
}
</script>