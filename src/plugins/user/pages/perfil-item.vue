<template>
  <div data-app>
    <h1>Profile</h1>
    <v-row>
      <v-dialog v-model="dialog" persistent max-width="600px">
        <v-card>
          <v-card-title>
            <span class="text-h5">Edit Profile</span>
          </v-card-title>
          <v-col cols="12">
            <v-text-field
                label="Name*"
                required
                outlined
                v-model="infoProfile.firstname"
            ></v-text-field>
            <v-text-field
                label="Last Name*"
                required
                outlined
                v-model="infoProfile.lastname"
            ></v-text-field>


            <v-text-field
                label="DNI*"
                required
                outlined
                v-model="infoProfile.dni"
            ></v-text-field>
            <v-text-field
                label="Username*"
                required
                outlined
                v-model="infoProfile.user"
            ></v-text-field>
          </v-col>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="closeDialog">
              Close
            </v-btn>
            <v-btn color="green darken-1" text @click="updateProfile(infoProfile)">
              Save
            </v-btn>

          </v-card-actions>
        </v-card>
      </v-dialog>

    </v-row>

    <div class="contenedor">
      <div class="btn-fab">
        <v-btn class="mx-2" fab dark large color="cyan" @click="openDialogProfile(infoProfile)">
          <v-icon dark>
            mdi-pencil
          </v-icon>
        </v-btn>
      </div>
      <div class="img">
        <img class="img-perfil" src="../../../assets/user.png">
      </div>
      <div class="detalles">
        <div>
          <h1>ID</h1>
          <h2>{{infoProfile.id}}</h2>
        </div>
        <div>
          <h1>Name</h1>
          <h2>{{infoProfile.firstname}}</h2>
        </div>
        <div>
          <h1>LastName</h1>
          <h2>{{infoProfile.lastname}}</h2>
        </div>
        <div>
          <h1>DNI</h1>
          <h2>{{infoProfile.dni}}</h2>
        </div>
        <div>
          <h1>Username</h1>
          <h2>{{infoProfile.user}}</h2>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import MusicalProducersService from '../../musical-producer/services/musical-producer.service'
import VideoProducerService from '../../video-producer/services/video-producer.service';

export default {
  name: "perfil-item",

  data() {
    return {
      infoProfile: [],
      editReserve: false,
      dialog: false,
      applianceReserveItem: {},
      idUser: localStorage.getItem('idUser'),
      userType: localStorage.getItem('typeUser')

    }
  },
  methods: {
    getUserInfo() {
      console.log(this.idUser)
      console.log(this.userType)
      if(this.userType == 'music'){
        MusicalProducersService.getById(this.idUser)
            .then((response) => {
              console.log(response.data)
              this.infoProfile = response.data
            })
      } else if (this.userType == 'video'){
        VideoProducerService.getById(this.idUser)
            .then((response) => {
              console.log(response.data)
              this.infoProfile = response.data
            })

      }


    },
    getUser(user) {
      return {
        id: user.id,
        profile: user.profile,
        imagePath: user.imagePath,
        name: user.name,
        lastName: user.lastName,
        email: user.email,
        age: user.age,
        dni: user.dni,
        cellphone: user.cellphone
      }
    },
    openDialogProfile() {
      this.dialog = true;
    },

    closeDialog() {
      this.dialog = false;
    },
    updateProfile(info) {
      console.log(info)
      if(this.userType == 'music'){
        MusicalProducersService.update(info.id, info)
            .then(response => {
              console.log(response);
              this.dialog = false;
            })
            .catch(e => {
              console.log(e);
            });
      }else if(this.userType == 'video'){
        VideoProducerService.update(info.id, info)
          .then(response => {
            console.log(response);
            this.dialog = false;
          })
      }

    },



  },
  mounted() {
    this.getUserInfo()
  }
}
</script>

<style scoped>
.contenedor {
  margin-top: 50px;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
}
.btn-fab{
  text-align: end;
}
.img-perfil{
  height: 200px;
  width: 200px;
}

.detalles {

  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2em;
}
</style>