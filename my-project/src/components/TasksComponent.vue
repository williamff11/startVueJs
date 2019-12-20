<template>
    <div class="component">
        <table>
            <tr>
                <th>Nome</th>
                <th>Finalizada?</th>
            </tr>
            <tr v-for="(task, index) in tasks" :key="index">
                <td>{{task.name}}</td>
                <td>{{task.complet ? 'Sim' :' Não'}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    data() {
        return{
            tasks: [
                {name: 'Lavar Louça', complet: true},
                {name: 'Lavar Carro', complet: false},
                {name: 'Lavar Banheiro', complet: true},
                {name: 'Lavar o pé', complet: true},
            ]
        }
    }
}
</script>

<style scoped>
.component{
    border: 1px solid red;
}
</style>