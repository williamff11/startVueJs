<template>
  <div>
    <h1 v-text="title"></h1>

    <task-add></task-add>

    <ul>
      <li v-for="(task, index) in getTasksSorted" :key="index" :class="{'completed': task.completed}">
        <a href="#" @click.prevent="completedTask(task)">Alternar Tarefa</a>
        {{task.name}}
      </li>
    </ul>
  </div>
</template>

<script>
import TaskAddComponent from "./TaskAddComponent";
export default {
  data() {
    return {
      title: "Lista de Tarefas"
    };
  },
  computed: {
    getTasks() {
      return this.$store.state.tasks;
    },
    getTasksSorted () {
        return this.$store.getters.sortedTasks
    }
  },
  components: {
    "task-add": TaskAddComponent
  },
  methods: {
    completedTask(task) {
      this.$store.commit("ALTERNAR_TASK", task);
    }
  }
};
</script>

<style scoped>
.completed{background: green}
</style>