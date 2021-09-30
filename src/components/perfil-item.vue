<template>
  <div>
    <h1>Perfil</h1>
    <div class="contenedor">
      <div class="btn-fab">
        <v-btn
            class="mx-2"
            fab
            dark
            large
            color="cyan"
            @click="openAppliancesBrandDialog(infoProfile)"
        >
          <v-icon dark>
            mdi-pencil
          </v-icon>
        </v-btn>
      </div>
      <div class="img">
        <img class="img-perfil" src="../assets/user.png">
      </div>
      <div class="detalles">
        <div>
          <h1>Nombre</h1>
          <h2>{{infoProfile.name}}</h2>
        </div>
        <div>
          <h1>Apellido</h1>
          <h2>{{infoProfile.lastname}}</h2>
        </div>
        <div>
          <h1>Edad</h1>
          <h2>{{infoProfile.age}}</h2>
        </div>
        <div>
          <h1>Email</h1>
          <h2>{{infoProfile.email}}</h2>
        </div>
        <div>
          <h1>DNI</h1>
          <h2>{{infoProfile.dni}}</h2>
        </div>
        <div>
          <h1>Cellphone</h1>
          <h2>{{infoProfile.cellphone}}</h2>
        </div>
      </div>
    </div>

    <EditDialog
        v-bind:dialog="dialog"
        v-bind:edit="editReserve"
        v-bind:title="editReserve ? 'Edit' : 'New Brand'"
        v-bind:item="applianceReserveItem"
        v-on:close-dialog="closeAppliancesReserveDialog"
        v-on:brand-information="saveInformationReserveDialog"
        v-on:delete-brand="deleteReserve"
    />
  </div>
</template>

<script>
import MusicalProducersService from '../plugins/musical-producer/services/musical-producer.service'
import EditDialog from "./edit-profile-dialog";
export default {
  name: "perfil-item",
  components: {EditDialog},
  data() {
    return {
      infoProfile: [],
      editReserve: false,
      dialog: false,
      applianceReserveItem: {}
    }
  },
  methods: {
    getUserInfo() {
      MusicalProducersService.getById(1)
      .then((response) => {
        console.log(response.data)
        this.infoProfile = response.data
      })

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
    openAppliancesBrandDialog(item) {
      this.applianceReserveItem = Object.assign({}, item);
      this.dialog = true;
      this.editReserve = !!item.id;
    },
    retrieveAppliances() {
      MusicalProducersService.getAll()
          .then(response => {
            this.infoProfile = response.data.map(this.getUser());
            console.log(this.infoProfile);
          })
          .catch(e => {
            console.log(e);
          });
    },
    closeAppliancesReserveDialog() {
      this.dialog = false;
    },
    updateApplianceBrand(brandInformation) {
      MusicalProducersService.update(brandInformation.id, brandInformation)
          .then(response => {
            console.log(response);
          })
          .catch(e => {
            console.log(e);
          });
    },
    createApplianceBrand(brandInformation) {
      MusicalProducersService.create(brandInformation)
          .then(response => {
            console.log(response);
          })
          .catch(e => {
            console.log(e);
          });
    },
    async saveInformationReserveDialog(brandInformation) {
      if (this.editReserve) {
        await this.updateApplianceBrand(brandInformation);
      }
      else {
        await this.createApplianceBrand(brandInformation);
      }
      this.retrieveAppliances();
      this.closeAppliancesReserveDialog();
    },
    async deleteReserve(id) {
      await MusicalProducersService.delete(id)
          .then(response => {
            console.log(response);
          })
          .catch(e => {
            console.log(e);
          });
      this.retrieveAppliances();
      this.closeAppliancesReserveDialog();
    }

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