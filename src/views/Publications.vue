<template>
  <div>
    <Header/>
    <PublicationList/>
  </div>
</template>

<script>
import Header from "../plugins/general/pages/header";
import PublicationList from "../plugins/publication/pages/publication-list";
export default {
  name: "Publications",
  components: {Header, PublicationList}
}
</script>

