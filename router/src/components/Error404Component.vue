<template>
    <div>
        <h2>{{msg}}</h2>
    </div>
</template>

<script>
export default {
    props: [
        'id'
    ],
    data() {
        return {
            msg: 'error 404'
        }
    }
}
</script>

<style scoped>

</style>