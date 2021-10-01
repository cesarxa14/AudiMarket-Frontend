<template>
  <div>
    <p>{{task.titulo}}</p>
  </div>
</template>

<script>
export default {
  name: "task-item",
  props: [
      "task"
  ]
}
</script>

<style scoped>

</style>