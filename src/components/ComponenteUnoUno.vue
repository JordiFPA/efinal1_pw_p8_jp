<template>
  <div>
    <img :src="imagen" alt="no hay" />
    <p>{{ texto }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    imagen: {
      type: String,
    },
    texto: {
      type: String,
    },
  },
};
</script>

<style>
  img{
    padding: 20px;
  }
</style>