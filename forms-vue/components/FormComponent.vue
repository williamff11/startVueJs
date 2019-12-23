<template>
  <div>
    <ValidationObserver v-slot="{ handleSubmit }">
      <form @submit.prevent="handleSubmit(saveData)">
        <ValidationProvider rules="required|alpha" v-slot="{ errors }">
          <input type="text" placeholder="Nome" v-model="userData.name" />
          <span>{{ errors[0] }}</span>
        </ValidationProvider>
        <hr />
        <ValidationProvider name="email" rules="required|email" v-slot="{ errors }">
          <input type="email" name="email" placeholder="Email" v-model="userData.email" />
          <span>{{ errors[0] }}</span>
        </ValidationProvider>
        <hr />
        <ValidationProvider rules="required|min_value:18" v-slot="{ errors }">
          <input type="number" placeholder="Idade" v-model="userData.age" />
          <span>{{ errors[0] }}</span>
        </ValidationProvider>
        <hr />
        <ValidationProvider rules="required|alpha" v-slot="{ errors }">
          <input type="radio" name="sex" value="Masculino" v-model="userData.sex" />Masculino |
          <input type="radio" name="sex" value="Feminino" v-model="userData.sex" />Feminino
        </ValidationProvider>
        <hr />
        <ValidationProvider rules="required|alpha" v-slot="{ errors }">
          <select v-model="userData.state">
            <option value>Selecione</option>
            <option value="RO">Rondônia</option>
            <option value="RJ">Rio de Janeiro</option>
            <option value="MG">Minas Gerais</option>
          </select>
        </ValidationProvider>
        <hr />
        <label for="agree">Concordo com os termos de uso</label>
        <input type="checkbox" id="agree" v-model="terms" />
        <hr />
          <textarea rules="required" cols="30" rows="10" v-model="description"></textarea>
          <div class="pre" v-html="description"></div>
        <hr />
        <button type="submit">Enviar</button>
      </form>
    </ValidationObserver>
    <br />
  </div>
</template>

<script>
import {
  ValidationObserver,
  ValidationProvider,
  extend,
  localize
} from "vee-validate";
import * as rules from "vee-validate/dist/rules";

Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule]);
});
export default {
  data() {
    return {
      userData: {
        name: "",
        email: "",
        age: "",
        sex: "",
        state: ""
      },
      terms: true,
      description: "",
      isSubmited: false
    };
  },
  components: {
    ValidationProvider,
    ValidationObserver
  },
  methods: {
    saveData() {
      alert('Form submitted!');
    }
  }
};
</script>

<style scoped>
.pre {
  white-space: pre;
}
.is-danger {
  border: 1px solid red;
}
.is-danger p {
  color: solid red;
}
</style>