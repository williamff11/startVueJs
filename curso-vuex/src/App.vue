<template>
  <div id="app">
    <router-link to="/">Home</router-link>
    <router-link to="/tarefas">Tarefas ({{totalTasksNotCompleted}})</router-link>

  <p>Tarefas completas ({{totalTasks}})</p>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
    }
  },
  computed: {
    totalTasksNotCompleted() {
      return this.$store.getters.tasksNotCompleted.length
    },
    totalTasks () {
      return this.$store.getters.sortedTasks.length
    }
  }
}
</script>

<style>
a {
  color: #42b983;
}
</style>
