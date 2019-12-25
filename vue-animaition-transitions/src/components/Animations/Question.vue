<template>
  <div class="card">
    <div class="card-header">
      <h2 v-text="question"></h2>
    </div>
    <div class="card-body">
      <form @submit.prevent="checkResult" class="form form-inline">
        <input type="text" placeholder="Responda Aqui" v-model="reply" class="form-control"/>
        <button class="btn btn-info" type="submit">Responder</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      question: "",
      result: 0,
      reply: ""
    };
  },
  created() {
    this.generateQuestion();
  },
  methods: {
    generateQuestion() {
      let numberMin = this.generateRandomNumber(1, 100);
      let numberMax = this.generateRandomNumber(1, 100);

      this.result = numberMin + numberMax;

      this.question = `Qual é o resultado da soma entre ${numberMin} + ${numberMax}?`;
    },
    generateRandomNumber(min, max) {
      return Math.round(Math.random() * (max - min)) + min;
    },
    checkResult() {
      let mode = "answer-error";
      if (this.reply == this.result) mode = "answer-success";

      this.$emit("changeMode", mode);
    }
  }
};
</script>

<style scoped>
.question {
  border: 2px solid blue;
  padding: 10px;
}
button{
    margin: 5px
}
</style>