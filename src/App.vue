<template>
  <div id="app">
    <img alt="DXCC logo" src="http://cdn.dxcodercrew.net/dxcc-images/favicon.png">
    <h2>{{ msg }}</h2>
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/restaurantes">Restaurantes</router-link>
      </li>
      <li>
        <router-link :to="{name: 'restaurante-top', params:{ id: 16 }}">Restaurante destacado</router-link>
      </li>
      <li>
        <router-link to="/contacto">Contacto</router-link>
      </li>
    </ul>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      msg: "Restaurante App"
    };
  }
};
</script>

<style>
#app {
  font-family: "Ubuntu Mono", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
