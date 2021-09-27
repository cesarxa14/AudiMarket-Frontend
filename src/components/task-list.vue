<template>
  <div>
    <h2>Tasky</h2>
    <ul>
      <li v-bind:key="task.id" v-for="task in tasks">
        <TaskItem v-bind:task="task" />
      </li>
    </ul>
  </div>
</template>

<script>
import TaskItem from "./task-item";
export default {
  name: "task-list",
  components: {TaskItem},
  props: [
      "tasks"
  ]
}
</script>

<style scoped>

</style>