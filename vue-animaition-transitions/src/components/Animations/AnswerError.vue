<template>
  <div class="alert alert-danger text-center">
    <h1>{{ msg }}</h1>
    <hr />
    <p>Error na Resposta</p>

    <button class="btn btn-danger" @click="nextQuestion">Próxima Pergunta</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Error!"
    };
  },
  components: {},
  methods: {
    nextQuestion() {
      this.$emit("changeMode");
    }
  }
};
</script>

<style scoped>
.error {
  border: 2px solid red;
    padding: 10px;
}
</style>