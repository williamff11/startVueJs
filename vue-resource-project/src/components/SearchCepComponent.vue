<template>
  <div>
    <h1 v-text="title"></h1>
    <div class="content">
      <form class="form-inline" @submit.prevent="onSubmit">
        <input class="form-control" type="text" placeholder="Informe o Cep" v-model="cep" />
        <button class="btn btn-success" type="submit">Buscar</button>
      </form>
    </div>

    <div v-if="error != ''">{{error}}</div>

    <div v-if="preloader" class="spinner-border" role="status">
      <span class="sr-only">Loading...</span>
    </div>
    <div class="container" v-show="address.bairro">
      <p>Estado: {{address.estado}}</p>
      <p>Cidade: {{address.cidade}}</p>
      <p>Bairro: {{address.bairro}}</p>
      <p>Logradouro: {{address.logradouro}}</p>
      <p>Cep: {{address.cep}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Buscar Cep com VueJS",
      cep: "",
      address: {},
      preloader: false,
      error: ""
    };
  },
  methods: {
    onSubmit() {
      this.reset();
      this.preloader = true;

      this.$http
        .get("https://api.postmon.com.br/v1/cep/" + this.cep)
        .then(
          response => {
            this.address = response.body;
          },
          error => {
            console.log(error);

            this.error = "CEP ERRADO!";
          }
        )
        .finally(() => {
          this.preloader = false;
        });
    },
    reset() {
      this.error = "";
      this.address.bairro = "";
    }
  },
  components: {}
};
</script>

<style scoped>
button {
  margin: 5px;
}
.content {
  width: 400px;
  margin: 0 auto;
}
</style>