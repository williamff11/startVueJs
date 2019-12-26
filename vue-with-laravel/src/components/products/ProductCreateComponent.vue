<template>
  <div>
    <h1 v-text="title"></h1>

    <form @submit.prevent="createProduct">
      <div class="form-group">
        <input type="text" class="form-control" placeholder="Nome:" v-model="product.name" />

        <div class="errorX" v-if="errorsValidation">
          <p v-for="(error, index) in errorsValidation.name" :key="index" v-text="error"></p>
        </div>
      </div>
      <div class="form-group">
        <input
          type="text"
          class="form-control"
          placeholder="Descrição:"
          v-model="product.description"
        />
        <div class="errorX" v-if="errorsValidation">
          <p v-for="(error, index) in errorsValidation.description" :key="index" v-text="error"></p>
        </div>
      </div>
      <div class="form-group">
        <button type="submit" class="btn btn-success">Cadastrar</button>
      </div>
    </form>
    <preloader-component :preloader="preloader"></preloader-component>
  </div>
</template>

<script>
import PreloaderComponent from "../general/PreloaderComponent";

export default {
  data() {
    return {
      title: "Cadastrar novo Produto",
      product: {
        name: "",
        description: ""
      },
      preloader: false,
      errorsValidation: []
    };
  },
  components: {
    PreloaderComponent
  },
  methods: {
    createProduct() {
      this.preloader = true;
      this.$http
        .post("http://127.0.0.1:8000/api/v1/products", this.product)
        .then(
          response => {
            this.$router.push("/produtos");
          },
          error => {
            if (error.status === 422) this.errorsValidation = error.body.errors;
            console.log(error);
          }
        )
        .finally(() => (this.preloader = false));
    }
  }
};
</script>

<style scoped>
.errorX {
  color: red;
}
.errorX input {
  border: 1px solid;
  color: red;
}
</style>