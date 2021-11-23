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
    <div class="login-content" v-if="typeUser">
      <div class="login-header">
        <h1>Sign In</h1>
      </div>
      <div class="login-form">
        <v-col cols="12">
          <v-text-field
              label="Username"
              required
              outlined
              v-model="userr.user"
          ></v-text-field>
          <v-text-field
              label="Password"
              required
              outlined
              type="password"
              v-model="userr.password"
          ></v-text-field>
        </v-col>
      </div>
      <div class="login-footer">
        <a href="/register">¿No tienes cuenta? Registrate</a>
        <v-btn color="green darken-1" text @click="login(userr)">
          Login
        </v-btn>
      </div>
    </div>
  </div>

</template>

<script>
import AuthService from '../services/auth.service';
export default {
  name: "login-form",
  data(){
    return {
      userr: {user: null, password: null},
      chooseContent: true,
      typeUser: null,
    }
  },
  methods: {
    login(){
      console.log(this.userr);
      if(this.typeUser == 'music'){
        AuthService.loginMusicProducer(this.user)
            .then((response)=>{
              console.log(response)
              // localStorage.setItem('idUser', response.data.id);

            })
      }else if (this.typeUser == 'video'){
        AuthService.loginVideoProducer(this.user)
            .then((response)=>{
              console.log(response)
              // localStorage.setItem('idUser', response.data.id);
            })
      }
      localStorage.setItem('idUser', 1);
      localStorage.setItem('typeUser', this.typeUser);
      this.$router.push('/')



    },
    chooseUser(type){
      this.chooseContent = false;
      this.typeUser = type;
    },

  }
}
</script>

<style scoped>
.choose-user{
  margin: 5% 30%;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}
.login-content{
  /*border: 2px solid red;*/
  margin: 5% 30%;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
.login-header{
  background-color: darkgoldenrod;
  color: #cecece;
}

.login-footer{
  display: grid;
  grid-template-rows: 1fr 1fr;
}

</style>