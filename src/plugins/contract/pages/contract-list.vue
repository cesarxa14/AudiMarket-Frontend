<template>
  <div>
    <Header/>
    <div class="data-table">
<!--      <h1>PROJECTS By Musical Producer {{ this.$route.params.idProducer}}</h1>-->
      <v-row align="center" class="px-3 mx-auto">
        <v-col cols="12" sm="12">
          <v-card class="mx-auto" tile>
            <v-data-table :headers="headers" :items="contracts" :search="name" sort-by="name">
              <template v-slot:top>
                <v-toolbar flat>
                  <v-toolbar-title>Contracts Table</v-toolbar-title>
                  <v-divider class="mx-4" inset vertical></v-divider>
                  <v-spacer></v-spacer>
                </v-toolbar>
              </template>
              <!-- Actions Section -->
<!--              <template v-slot:item.actions="{ item }">-->
<!--                <v-icon small class="mr-2" @click="editItem(item)">mdi-pencil</v-icon>-->
<!--                <v-icon small @click="deleteItem(item)">mdi-delete</v-icon>-->
<!--              </template>-->
              <!-- No Data Scenario -->

            </v-data-table>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
// import ContractService from "../services/contract.service";
import MusicalProducerService from "../../musical-producer/services/musical-producer.service";
export default {
  name: "contract-list",
  data: () =>({
    contracts: [],
    name: '',
    headers: [
      {text: 'Id',                 value: 'id',                 sortable: false,  align:'star'},
      {text: 'Content',               value: 'content',          sortable: false,  align: 'star'}
      // {text: 'Create Date',        value: 'createDate',               sortable: false,  align: 'star'},
      // {text: 'M. Producer ID', value: 'musical_producerId', sortable: false},
    ],
    dialog:false,
    dialogDelete:false,
    editedIndex:-1,

  }),
  methods: {
    getContractsByMProducer(){
      MusicalProducerService.getContractsById(1)
      .then((response)=>{
        console.log(response)
        this.contracts = response.data
      })
    }
  },
  mounted() {
    this.getContractsByMProducer()

  }
}
</script>

<style scoped>
.data-table{
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 20px;
}
</style>