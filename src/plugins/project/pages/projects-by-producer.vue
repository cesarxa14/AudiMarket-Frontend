<template>
  <div data-app>
    <Header/>

    <div class="data-table">
      <h1>PROJECTS By Play List {{ this.$route.params.idPlayList}}</h1>
      <v-row align="center" class="px-3 mx-auto">
        <v-col cols="12" sm="12">
          <v-card class="mx-auto" tile>
            <v-data-table :headers="headers" :items="projects" :search="name" sort-by="name">
              <template v-slot:top>
                <v-toolbar flat>
                  <v-toolbar-title>Projects Catalogue</v-toolbar-title>
                  <v-divider class="mx-4" inset vertical></v-divider>
                  <v-spacer></v-spacer>
                  <v-dialog v-model="dialog" max-width="500px">
                    <template v-slot:activator="{on, attrs}">
                      <v-btn v-if="typeUser == 'music' && idUser ==  idMProducer" color="primary" dark class="mb-2" v-bind="attrs" v-on="on">New Project</v-btn>
                    </template>
                    <v-card>
                      <v-card-title>{{formName}}</v-card-title>
                      <v-card-text>
                        <v-container>
                          <v-row>
                            <v-col cols="12" sm="6" md="4" lg="12">
                              <v-text-field v-model="newItem.name" label="Project Name"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4" lg="12">
                              <v-text-field v-model="newItem.description" label="Project Description"></v-text-field>
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
                  <!-- Delete Confirmation Dialog -->
                  <v-dialog v-model="dialogDelete" max-width="500px">
                    <v-card-title>Delete Project</v-card-title>
                    <v-card-text>Are you sure you want to delete this project? </v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="primary" text @click="close">Cancel</v-btn>
                      <v-btn color="primary" @click="deleteItemConfirm">Delete</v-btn>
                    </v-card-actions>
                  </v-dialog>
                </v-toolbar>
              </template>
              <!-- Actions Section -->
              <template v-slot:item.actions="{ item }">
                <v-icon small class="mr-2" @click="editItem(item)">mdi-pencil</v-icon>
                <v-icon small @click="deleteItem(item)">mdi-delete</v-icon>
              </template>
              <!-- No Data Scenario -->
              <template v-slot:no-data>
                <v-btn color="primary" @click="retrieveProjects">Reset</v-btn>
              </template>
            </v-data-table>
          </v-card>
        </v-col>
      </v-row>
    </div>

  </div>
</template>

<script>
//import MusicalProducerService from '../../musical-producer/services/musical-producer.service';

import ProjectService from '../services/project.service';
import Header from "../../general/pages/header";
import PlayListService from '../../playlist/services/playlist.service'

export default {
  name: "projects-by-producer",
  data: () =>({
    idPlaylist: null,
    idMProducer: null,
    projects: [],
    name: '',
    headers: [
      {text: 'Id',                 value: 'id',                 sortable: true,  align:'star'},
      {text: 'Name',               value: 'name',               sortable: true,  align: 'star'},
      {text: 'Description',        value: 'description', sortable: false},
    ],
    dialog:false,
    dialogDelete:false,
    editedIndex:-1,
    newItem: {id: 0, name:'', description: '',addedDate: new Date(),playlistId:null},
    idUser: localStorage.getItem('idUser'),
    typeUser: localStorage.getItem('typeUser')
  }),
  computed: {
    formName(){
      return this.editedIndex === -1? 'New Project' : 'Edit Project';
    }
  },
  watch: {
    dialog(val){
      val || this.close();
    },
    dialogDelete(val){
      val || this.closeDelete();
    }
  },
  components: {Header},
  methods: {
    close(){
      this.dialog=false;
    },

    closeDelete(){
      this.dialogDelete=false;
    },

    getDisplayProject(project){
      return{
        id: project.id,
        name: project.name,
        playlistId: project.playlistId,

      }
    },
    getProjectsByPlayListId(){
      PlayListService.getProjectsByPlayListId(this.$route.params.idPlayList)
      .then((response)=>{
        console.log(response)
        this.projects = response.data
        this.idPlaylist = response.data[0].playList.musicProducer.id;
      })
    },

    retrieveProjects(){
      PlayListService.getAll()
          .then((response) => {
            this.projects=response.data.map(this.getDisplayProject);
          })
          .catch(e=>{
            console.log(e);
          });
    },

    refreshList(){
      this.retrieveProjects();
    },

    editItem(item){
      this.editedIndex=this.projects.indexOf(item);
      this.editedItem=Object.assign({},item);
      this.dialog=true;
    },

    deleteItem(item){
      this.editedIndex=this.projects.indexOf(item);
      this.editedItem=Object.assign({},item);
      this.dialogDelete=true;
    },

    deleteItemConfirm(){
      // TODO: Delete Project
    },

    save(){
      //TODO: Create or Update Project
      this.newItem.playlistId = parseInt(this.$route.params.idPlayList);
      ProjectService.createProject(this.newItem)
      .then((response) => {
        console.log(response.data)
        this.projects.push(response.data)
      })
      this.close();
    },

    deleteProject(id){
      PlayListService.delete(id)
          .then(() => {
            this.refreshList();
          })
          .catch(e=>{
            console.log(e);
          });
    },
    // getProjectsById() {
    //   PlayListService.getProjectsById(this.$route.params.idPlayList)
    //   .then((response) =>{
    //     console.log(response.data)
    //     this.projects = response.data
    //   })
    // }
  },
  mounted() {
    console.log(this.$route.params)
    // this.getProjectsById(this.$route.params.idPlayList)
    this.getProjectsByPlayListId();
    this.idPlaylist = this.$route.params.idPlayList;

  }
}
</script>

<style scoped>
.data-table {
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 20px;
}
</style>