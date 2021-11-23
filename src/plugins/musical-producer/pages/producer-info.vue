<template>
  <div data-app>
    <Header/>
    <v-row>
      <v-dialog v-model="dialogContract" persistent max-width="600px">
        <v-card>
          <v-card-title>
            <span class="text-h5">Contrat {{infoProducer.firstname}} {{infoProducer.lastname}}</span>
          </v-card-title>
          <v-col cols="12">
            <v-text-field label="Description Contract" required outlined v-model="infoContract.content">

            </v-text-field>
          </v-col>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="closeDialog">
              Close
            </v-btn>
            <v-btn color="green darken-1" text @click="contractProducer()">
              Contract
            </v-btn>

          </v-card-actions>
        </v-card>
      </v-dialog>

    </v-row>

    <div class="container">
      <div class="img-profile">
        <img class="img" src="../../../assets/user.png" alt="">
      </div>
      <div class="detalles">
        <h2>Name: {{infoProducer.firstname}}</h2>
        <h2>Lastname: {{infoProducer.lastname}}</h2>
<!--        <h2>Email: {{infoProducer.email}}</h2>-->
        <h2>Username: {{infoProducer.user}}</h2>
        <h2>DNI: {{infoProducer.dni}}</h2>
        <v-rating readonly color="primary"  length="5" size="20" :value="infoProducer.qualification" ></v-rating>
      </div>

    </div>
    <div class="btn-contract">
      <v-btn  color="deep-orange" @click="openDialogContract()">
        Contract
      </v-btn>
    </div>

    <div class="reseñas">
      <div class="titulo-reseña">
        <h1>Review about the author</h1>
        <v-btn  color="deep-orange" @click="openDialogNewReseña()">
          Add Review
        </v-btn>
      </div>
      <div class="reseñas-list" v-bind:key="reseña.id" v-for="reseña in reseñalist">
        <ReseñaItem v-bind:reseña="reseña"/>
      </div>
    </div>
    <v-row>
      <v-dialog v-model="dialogNewReseña" persistent max-width="600px">
        <v-card>
          <v-card-title>
            <span class="text-h5">New Reseña</span>
          </v-card-title>
          <v-col cols="12">
            <v-text-field label="Comment" required outlined v-model="newReseña.description">

            </v-text-field>
            <v-rating color="primary"  length="5" size="20" :value="newReseña.qualification" ></v-rating>
          </v-col>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="closeDialogReseña()">
              Close
            </v-btn>
            <v-btn color="green darken-1" text @click="addReseña()">
              Add
            </v-btn>

          </v-card-actions>
        </v-card>
      </v-dialog>

    </v-row>

  </div>
</template>

<script>
import MusicalProducerService from '../services/musical-producer.service';
import Header from "../../general/pages/header";
import ContractService from "../../contract/services/contract.service";
import ReseñaItem from "../../reseña/pages/reseña-item";
import ReseñaService from "../../reseña/services/reseña.service";
export default {
  name: "producer-info",
  components: {ReseñaItem, Header},
  data: () => ({
    infoProducer: {},
    infoContract: {
      content: '',
      musicProducerId: null, // por mientras lo pongo por defecto null
      videoProducerId: null
    },
    newReseña: {
      description: '',
      qualification: null,
      videoProducerId: null,
      musicProducerId: null,
      publicationDate: new Date()
    },
    reseñalist: [],
    dialogContract: false,
    dialogNewReseña: false

  }),
  methods: {
    getInfoMusicalProducer() {
      MusicalProducerService.getById(this.$route.params.id)
      .then((response)=>{
        console.log(response.data)
        this.infoProducer = response.data;
      })
    },
    getReseñasByIDMProducer(){
      MusicalProducerService.getReviewsById(this.$route.params.id)
      .then((response) => {
        console.log('reseñas', response.data)
        this.reseñalist = response.data;
      })
    },
    closeDialog() {
      this.dialogContract = false;
    },
    closeDialogReseña() {
      this.dialogNewReseña = false;
    },
    contractProducer() {
      this.infoContract.musicProducerId = parseInt(this.$route.params.id);
      this.infoContract.videoProducerId  = 1;//por mientras
      console.log(this.infoContract)
    ContractService.createContract(this.infoContract)
      .then((response) => {
        console.log(response.data)
        this.closeDialog()
        this.$router.push('/')
      })
    },
    openDialogContract() {
      this.dialogContract = true
    },
    openDialogNewReseña(){
      this.dialogNewReseña = true
    },
    addReseña(){
      this.newReseña.musicProducerId = this.infoProducer.id
      this.newReseña.videoProducerId = 1//por mientras
      this.newReseña.qualification = 4
      console.log(this.newReseña)
      ReseñaService.createReseña(this.newReseña)
      .then((response) => {
        console.log('createdreseña', response)
        this.reseñalist.push(response.data)
        this.closeDialogReseña()
      })
    }

  },
  mounted() {
    console.log(this.$route.params.id)
    this.getInfoMusicalProducer();
    this.getReseñasByIDMProducer();
  }
}
</script>

<style scoped>
.container {
  margin-top: 5%;
  /*border: 2px solid red;*/
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  display: grid;
  grid-template-columns: 30% 70%;
}
.img-profile{
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
.img{
  max-height: 300px;
  max-width: 300px;
}

.detalles{
  background: rgb(34,34,2);
  background: linear-gradient(90deg, rgba(34,34,2,1) 0%, rgba(115,124,34,1) 49%, rgba(203,212,3,1) 100%);

  display: grid;
  row-gap: 10px;
}
h2{
  color: #cecece;
}

.btn-contract{
  margin-top: 20px;
}
.reseñas{
  margin-top: 20px;
}
.titulo-reseña {
  margin-left: 5%;
  text-align: left;
  display: grid;
  grid-template-columns: 70% 10%;
}
</style>