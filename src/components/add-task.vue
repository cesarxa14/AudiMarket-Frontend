<template>
  <div>
    <form @submit="addTask">
      <input type="text" v-model="titulo" name="titulo">
      <button type="submit">Add</button>
    </form>
  </div>
</template>

<script>
import {v4 as uuidv4} from 'uuid'
export default {
  name: "add-task",
  data(){
    return {
      titulo: ''
    }
  },
  methods: {
    addTask(item) {
      item.preventDefault();
      const newTask = {
        id: uuidv4(),
        titulo: this.titulo,
        check: false
      }
      this.$emit('add-task', newTask);
      this.titulo = '';
    }
  }
}
</script>

<style scoped>

</style>