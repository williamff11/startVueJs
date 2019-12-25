<template>
  <div class="alert alert-success text-center">
        <h1>{{ msg }}</h1>
        <hr>
        <p>Sucesso na Resposta</p>

        <button class="btn btn-success" @click="nextQuestion">Próxima Pergunta</button>
    </div>
</template>

<script>
export default {
    data () {
        return {
            msg: 'Sucesso'
        }
    },
    components: {
    },
    methods: {
        nextQuestion () {
            this.$emit('changeMode')
        }
    }
}
</script>

<style scoped>
.success{
    border: 2px solid green;
    padding: 10px;
}
</style>