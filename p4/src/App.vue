<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.jpg" />

    <nav>
      <ul>
        <li v-for="link in links" :key="link">
          <router-link :to="{ name: link }" exact>{{ link }}</router-link>
        </li>
      </ul>
    </nav>

    <router-view></router-view>
  </div>
</template>

<script>
import * as app from './app.js';

export default {
  name: 'app',
  components: {},
  data: function() {
    return {
      links: ['home', 'recipes', 'grains', 'shopping list'],
        sharedState: app.store
    };
  },
  mounted() {
      this.$store.dispatch('setRecipes');
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
