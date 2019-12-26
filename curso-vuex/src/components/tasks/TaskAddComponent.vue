<template>
  <div>
    <form @submit.prevent="onSubmit">
      <input type="text" placeholder="Adicionar Nova Tarefa" v-model="task.name" />
      <button type="submit">Adicionar</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Lista de Tarefas",
      task: {
        name: "",
        completed: false
      }
    };
  },
  computed: {
    getTasks() {
      return this.$store.state.tasks;
    }
  },
  methods: {
    onSubmit() {
    //   this.$store.commit("ADD_TASK", this.task);

    this.$store.dispatch('addTask', this.task)

      this.task = {
        name: "",
        completed: false
      };
    }
  }
};
</script>

<style scoped>
</style>