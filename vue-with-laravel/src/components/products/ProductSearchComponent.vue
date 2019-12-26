<template>
  <div>
      <form class="form form-inline" @submit.prevent="search">
          <input type="text" placeholder="Pesquisar" class="form-control" v-model="filter">
          <button class="btn btn-info">Pesquisar</button>
      </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Home Page",
      filter: ''
    };
  },
  methods: {
      search(){
          this.$emit('search', this.filter)
      }
  }
};
</script>

<style scoped>
button{
    margin: 10px;
}
</style>