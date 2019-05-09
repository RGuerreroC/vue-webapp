<template>
  <div>
    <ul id="list-group" v-if="restaurantes != null">
      <li class="list-group-item" v-for="(restaurante, index) in restaurantes" :key="index">
        <strong>{{ restaurante.nombre }}</strong>
      </li>
    </ul>
    <span v-else>Cargando restaurantes...</span>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "restaurantes-list",
  mounted() {
    this.getRestaurantes();
  },
  data() {
    return {
      texto: "Esto es la página de restaurantes",
      restaurantes: null
    };
  },

  methods: {
    getRestaurantes() {
      axios
        .get("http://localhost/slim/restaurantes-api.php/restaurantes")
        .then(respuesta => {
          this.restaurantes = respuesta.data.data;
        });
    }
  }
};
</script>

<style scoped>
</style>
