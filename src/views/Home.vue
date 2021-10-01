<template>
  <div class="home">
    <Header/>
    <Home1/>
    <Buscador/>

  </div>
</template>

<script>
// @ is an alias to /src


import Header from "../components/header";
import Home1 from "../components/Home1";

export default {
  name: 'Home',
  components: {
    Home1,
    Header,
  }
}
</script>
