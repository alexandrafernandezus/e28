<template>
  <div>
    <h2>Recipes</h2>
    <recipe-individual v-for='recipe in recipes' :key='recipe.id' :recipe='recipe'></recipe-individual>
  </div>
</template>

<script>
import RecipeIndividual from './RecipeIndividual.vue';
import {recipes} from './../recipes.js'

export default {
  name: 'RecipesList',
  components: { RecipeIndividual },
  data: function() {
    return {
      recipes: recipes
    };
  }
};
</script>

<style scoped>
</style>