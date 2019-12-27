<template>
  <div>
    <h1 v-text="title"></h1>
    <form @submit.prevent="getCep">
      <div :class="{'has-error': error}">
        <input type="text" placeholder="Buscar CEP" v-model="cep" />
        <button type="submit">Buscar</button>
      </div>

      <div v-if="error != ''">{{error}}</div>
    </form>
    <div v-show="preloader">
      <img src="../assets/831.gif" alt="preloader" class="preloader" />
    </div>

    <div v-if="address.logradouro">
      <p>
        <b>CEP:</b>
        {{address.cep}}
      </p>
      <p>
        <b>Logradouro:</b>
        {{address.logradouro}}
      </p>
      <p>
        <b>Bairro:</b>
        {{address.bairro}}
      </p>
      <p>
        <b>Cidade:</b>
        {{address.cidade}}
      </p>
      <p>
        <b>Estado:</b>
        {{address.uf}}
      </p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      title: "Buscar Cep AXIOS",
      cep: "",
      address: {},
      preloader: false,
      error: ""
    };
  },
  methods: {
    getCep() {
      this.reset();
      this.preloader = true;
      let vm = this;

      axios
        .get(`https://viacep.com.br/ws/${this.cep}/json/`)
        .then(function(response) {
          console.log(response.data);

          if (response.data.error) vm.error = "CEP INVÁLIDO";
          else vm.address = response.data;
        })
        .catch(function(error) {
          console.log(error);
          vm.error = 404;

        })
        .finally(function() {
          vm.preloader = false;
        });
    },
    reset() {
      this.error = ''
      this.address = {};
    }
  }
};
</script>

<style scoped>
.preloader {
  max-width: 100;
}
.has-error {
  background: red;
}
.has-error input {
  border: 1px solid red;
  color: red;
}
</style>