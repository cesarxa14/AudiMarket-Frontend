<template>
  <div>
    <Header/>
    <Top/>
  </div>
</template>

<script>
import Header from "../plugins/general/pages/header";
import Top from "../plugins/musical-producer/pages/top-producers";
export default {
  name: "Top-Producers",
  components: {Top, Header}
}
</script>

