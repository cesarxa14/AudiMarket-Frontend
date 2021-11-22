<template>
  <Header/>
     "actionButtons": {
		 "reloadButton": null,
		 "loadNpmCommands": false,
		 "commands": [
			 {
				 "name": "Pagar",
				 "singleInstance": true,
				 "color": "#af565c",
				 "command": "cargo run ${file}",
			 },
		 ]
	 }
</template>

<script>
import Header from "../components/header";
export default {
  name: "Anuncios",
  components: {Header}
}
</script>