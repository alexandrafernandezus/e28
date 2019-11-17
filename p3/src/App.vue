<template>
  <div id='app'>
    <img alt='Vue logo' src='./assets/logo.png' />

    <featured-recipe></featured-recipe>
    <recipes-list></recipes-list>
     
  </div>
</template>

<script>
import RecipesList from './components/RecipesList.vue';
import { recipes } from './recipes.js';
import FeaturedRecipe from './components/FeaturedRecipe.vue';

export default {
  name: 'app',
  components: { RecipesList, FeaturedRecipe },
  data: function() {
    return {
      recipes: recipes
    };
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
