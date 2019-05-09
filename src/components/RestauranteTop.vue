<template>
  <h2>{{ texto }}: {{ idRestaurante }}</h2>
</template>

<script>
export default {
  name: "restaurante-top",
  mounted() {
    this.idRestaurante = this.$route.params.id;
  },
  data() {
    return {
      texto: "Esto es la página del restaurante destacado",
      idRestaurante: null
    };
  }
};
</script>

<style scoped>
</style>
