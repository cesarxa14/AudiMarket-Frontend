<template>
  <div data-app>
    <div class="container" >
      <h1>My Publications</h1>
      <v-dialog v-model="dialog" max-width="500px">
        <template v-slot:activator="{on, attrs}">
          <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">New Publication</v-btn>
        </template>
        <v-card>
          <v-card-title>New Publication</v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="6" md="4" lg="12">
                  <v-text-field v-model="newItem.description" label="Publication Description"></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" text @click="close">Cancel</v-btn>
            <v-btn color="primary" @click="save">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <div class="producer-item" v-bind:key="pub.id" v-for="pub in publications">
        <PublicationItem v-bind:pub="pub" />
      </div>
    </div>
  </div>

</template>

<script>
import MusicalProducerService from '../../musical-producer/services/musical-producer.service';
import PublicationItem from "./publication-item";
import PublicationService from '../services/publication.service';
export default {
  name: "publication-list",
  components: {PublicationItem},
  data: () => ({
    publications: [],
    dialog:false,
    idUser: localStorage.getItem('idUser'),
    typeUser: localStorage.getItem('typeUser'),
    newItem: {musicProducerId:null, description: '',publicationDate: new Date(),projectId:9000}
  }),
  methods: {
    getPublicationsByMProducer() {
      MusicalProducerService.getPublicationsById(this.idUser)
          .then((response) => {
            console.log(response.data)
            response.data.map(x =>{
              x.publicationDate = x.publicationDate.split('T')[0]
            })
            this.publications = response.data
          })
    },
    close(){
      this.dialog=false;
    },
    refreshList(){
      this.getPublicationsByMProducer();
    },
    save(){
      //TODO: Create or Update Publication
      this.newItem.musicProducerId = this.idUser;
      console.log(this.newItem)
      PublicationService.create(this.newItem)
          .then((response) => {
            console.log(response.data)
            this.publications.push(response.data)
          })
      this.close();
    },
  },
  mounted() {
    this.getPublicationsByMProducer();
  }
}
</script>

<style scoped>

.container{
  margin: 2%;
  padding: 2%;
  /*border: 2px solid red;*/
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;
}

</style>