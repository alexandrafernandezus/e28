<template>
  <div>
    <h2>Recipes</h2>
    <recipe-individual v-for='recipe in recipes' :key='recipe.id' :recipe='recipe'></recipe-individual>
  </div>
</template>

<script>
import RecipeIndividual from './../RecipeIndividual.vue';
import * as app from './../../app.js';

export default {
  name: 'RecipesPage',
  components: { RecipeIndividual },
  data: function() {
    return {
      recipes: null
    };
  },
  mounted(){
    app.axios.get(app.config.api + 'recipes').then(response => {
        this.recipes = response.data;
    });
  }
};
</script>

<style scoped>
</style>