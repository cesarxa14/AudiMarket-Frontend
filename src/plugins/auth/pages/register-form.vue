<template>
  <div>
    <div class="choose-user" v-if="chooseContent">
      <div style="color: white; background-color: black"><h1>Choose your user type</h1></div>
      <v-btn color="green darken-1" text @click="chooseUser('video')">
        Video Producer
      </v-btn>
      <v-btn color="green darken-1" text @click="chooseUser('music')">
        Music Producer
      </v-btn>
    </div>
    <div class="register-content" v-if="typeUser">

      <div class="register-header">
        <h1>Sign Up</h1>
      </div>
      <div class="register-form-video" v-if="typeUser == 'video'" >
        <v-col cols="12">
          <v-text-field
              label="Firstname"
              required
              outlined
              v-model="videoProducer.firstname"
          ></v-text-field>
          <v-text-field
              label="Lastname"
              required
              outlined
              v-model="videoProducer.lastname"
          ></v-text-field>
          <v-text-field
              label="DNI"
              required
              outlined
              v-model="videoProducer.dni"
          ></v-text-field>
          <v-text-field
              label="Username"
              required
              outlined
              v-model="videoProducer.user"
          ></v-text-field>
          <v-text-field
              label="Password"
              required
              outlined
              type="password"
              v-model="videoProducer.password"
          ></v-text-field>
        </v-col>
      </div>
      <div class="register-form-music" v-if="typeUser == 'music'" >
        <v-col cols="12">
          <v-text-field
              label="Firstname"
              required
              outlined
              v-model="musicProducer.firstname"
          ></v-text-field>
          <v-text-field
              label="Lastname"
              required
              outlined
              v-model="musicProducer.lastname"
          ></v-text-field>
          <v-text-field
              label="DNI"
              required
              outlined
              v-model="musicProducer.dni"
          ></v-text-field>
          <v-text-field
              label="Username"
              required
              outlined
              v-model="musicProducer.user"
          ></v-text-field>
          <v-text-field
              label="Password"
              required
              outlined
              type="password"
              v-model="musicProducer.password"
          ></v-text-field>
        </v-col>
      </div>
      <div class="register-footer">
        <a href="/login">¿Ya tienes cuenta? Ingresa </a>
        <v-btn color="green darken-1" text @click="register()">
          Register
        </v-btn>
      </div>
    </div>
  </div>

</template>

<script>
import MusicalProducerService from '../../musical-producer/services/musical-producer.service';
import VideoProducerService from '../../video-producer/services/video-producer.service';
export default {
  name: "register-form",
  data(){
    return {
      musicProducer: {
        firstname: null,
        lastname: null,
        dni: null,
        user: null,
        password: null
      },
      videoProducer: {
        firstname: null,
        lastname: null,
        dni: null,
        user: null,
        password: null
      },
      typeUser: null,
      chooseContent: true
    }
  },
  methods: {
    register(){
      // console.log(this.videoProducer);
      if (this.typeUser == 'video'){
        VideoProducerService.create(this.videoProducer)
        .then((response) => {
          if(response.status == 200){
            localStorage.setItem('idUser', response.data.id);
            localStorage.setItem('typeUser', this.typeUser);
            this.$router.push('/')
          }
        })
        localStorage.setItem('token', this.videoProducer.username);
      }else if (this.typeUser == 'music'){
        console.log(this.musicProducer)
        MusicalProducerService.create(this.musicProducer)
        .then((response) =>{
          console.log(response)
          if(response.status == 200){
            localStorage.setItem('idUser', response.data.id);
            localStorage.setItem('typeUser', this.typeUser);
            this.$router.push('/')
          }
        })

      }

    },
    chooseUser(type){
      this.chooseContent = false;
      this.typeUser = type;
    }
  }
}
</script>

<style scoped>

.choose-user{
  margin: 5% 30%;
}
.register-content{
  /*border: 2px solid red;*/
  margin: 5% 30%;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
.register-header{
  background-color: darkgoldenrod;
  color: #cecece;
}

.register-footer{
  display: grid;
  grid-template-rows: 1fr 1fr;
}


</style>