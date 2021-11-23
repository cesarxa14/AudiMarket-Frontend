<template>
  <div>
    <Header/>
    <PlaylistHome/>
  </div>
</template>

<script>
import Header from "../plugins/general/pages/header";
import PlaylistHome from "../plugins/playlist/pages/playlist-home";
export default {
  name: "Playlist",
  components: {PlaylistHome, Header}
}
</script>

<style scoped>

</style>