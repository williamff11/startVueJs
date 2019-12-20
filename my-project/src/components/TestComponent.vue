<template>
  <div class="component">
    <p>Teste</p>
    <strong>Teste</strong>
<br>
    {{msg}}
    <form-component></form-component>
  </div>
</template>

<script>
import FormComponent from './FormComponent'

export default {
    data () {
        return {
            msg: 'Curso do VueJS'
        }
    },
    components: {
        FormComponent
    }
};
</script>

<style scoped>
p {
  color: red;
}
.component{
    border: 1px solid pink;
}
</style>