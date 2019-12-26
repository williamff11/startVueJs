<template>
  <div class="d-flex justify-content-center">
    <div v-show="preloader" class="spinner-grow text-info" style="width: 10rem; height: 10rem;" role="status">
      <span class="sr-only">Loading...</span>
    </div>
  </div>
</template>

<script>
export default {
props: {
    preloader: {
        type: Boolean,
        required: true,
        default: false
    }
},
};
</script>

<style scoped>
</style>