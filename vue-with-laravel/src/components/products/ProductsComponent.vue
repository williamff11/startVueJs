<template>
  <div>
    <h1>{{title}}</h1>

    <div class="row">
      <div class="col">
        <router-link class="btn btn-success btn-create" to="/produtos/create">Criar novo Produto</router-link>
      </div>

      <div class="col">
        <search-component @search="searchProduct"></search-component>
      </div>
    </div>

    <div class="alert alert-danger text-center" v-if="confirmeDelete">
      <h2>Deseja realmente deletar</h2>
      <hr />
      <button class="btn btn-danger" @click.prevent="deleteProduct">Deletar Agora</button>
    </div>

    <p>
      <b>Total:</b>
      <span>{{products.total}}</span>
    </p>
    <table class="table table-dark">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nome</th>
          <th scope="col">Descrição</th>
          <th scope="col">Ação</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product, index) in products.data" :key="index">
          <td>{{product.id}}</td>
          <td>{{product.name}}</td>
          <td>{{product.description}}</td>
          <td>
            <router-link
              class="btn btn-info"
              :to="{name: 'produto.edit', params: {
                 id: product.id
                 }}"
            >Editar</router-link>

            <a
              href="#"
              @click.prevent="confirmDeleteProduct(product.id)"
              class="btn btn-danger"
            >Deletar</a>
          </td>
        </tr>
      </tbody>
    </table>
    <!--
    <ul class="pagination">
      <li v-if="products.current_page - 1 >= 1" class="page-item">
        <a href="#" class="page-link"  @click.prevent="pagination(products.current_page - 1)">Voltar</a>
      </li>
      <li v-if="products.current_page + 1 <= products.last_page">
        <a href="#" class="page-link" @click.prevent="pagination(products.current_page + 1)">Próxima Pagina</a>
      </li>
    </ul>
    -->
    <pagination-component :pagination="products" :offset="offset" @paginate="getProducts"></pagination-component>

    <preloader-component :preloader="preloader"></preloader-component>
  </div>
</template>

<script>
import PaginationComponent from "../general/PaginationComponent";
import PreloaderComponent from "../general/PreloaderComponent";
import ProductSearchComponent from "./ProductSearchComponent";

export default {
  data() {
    return {
      title: "Lista de Produtos",
      products: {
        current_page: 1,
        last_page: 1
      },
      offset: 4,
      preloader: false,
      confirmeDelete: false,
      idProductDelete: 0,
      filter: ""
    };
  },
  components: {
    PaginationComponent,
    PreloaderComponent,
    searchComponent: ProductSearchComponent
  },
  created() {
    this.getProducts();
  },
  methods: {
    getProducts() {
      this.preloader = true;
      this.$http
        .get(
          `http://127.0.0.1:8000/api/v1/products?page=${this.products.current_page}&filter=${this.filter}`
        )
        .then(
          response => {
            console.log(response.body);
            this.products = response.body;
          },
          error => {
            console.log(error);
          }
        )
        .finally(() => (this.preloader = false));
    },
    confirmDeleteProduct(id) {
      this.confirmeDelete = true;

      this.idProductDelete = id;
    },
    deleteProduct() {
      this.preloader = true;

      this.$http
        .delete(`http://127.0.0.1:8000/api/v1/products/${this.idProductDelete}`)
        .then(
          response => {
            alert("Deu");
            this.confirmeDelete = false;

            this.idProductDelete = 0;
            this.getProducts();
          },
          error => {
            if (error.status === 422) this.errorsValidation = error.body.errors;
            console.log(error);
          }
        )
        .finally(() => (this.preloader = false));
    },
    searchProduct(filter) {
      this.filter = filter

      this.getProducts()
    }
  }
};
</script>

<style scoped>
.btn-create {
  margin: 10px 0;
}
</style>