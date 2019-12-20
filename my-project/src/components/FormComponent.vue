<template>
  <div class="component">
    <strong>William</strong>
    <hr>
    <strong>Felicio</strong>
    <hr>
    <strong>Freire</strong>
    <hr>
    <p v-html="msg"></p> 
  </div>
</template>


<script>
export default {
  data(){
    return{
      msg: '<strong>Lindão</strong>'
    }
  }
}
</script>

<style scoped>
strong{color: pink}
.component{
    border: 1px solid green;
}
</style>