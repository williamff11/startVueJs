<template>
  <div class="app">
    <h2>{{title}}</h2>

    <input type="text" v-model="task" />
    <button @click="callDad">Chamar Pai</button>

    <ul>
      <li v-for="(item, index) in items" :key="index">{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["items", "title"],
  data() {
    return {
        task: ''
    };
  },
  methods: {
    callDad() {
      this.$emit("callDad", this.task);

      this.task = ''

    }
  }
};
</script>

<style scoped>
</style>