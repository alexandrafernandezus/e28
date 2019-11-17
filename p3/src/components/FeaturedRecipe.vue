<template>
  <div id='featured'>
    <h2>Featured Recipes</h2>
    <ul>
      <li v-for='recipe in featuredList' :key='recipe.id'>{{ recipe.name }}</li>
    </ul>
  </div>
</template>

<script>
import { recipes } from './../recipes.js';

export default {
  name: 'FeaturedRecipe',
  computed: {
    featuredList: function() {
      function isMatch(recipe) {
        return recipe.categories.includes(this);
      }
      return this.recipes.filter(isMatch, this.category);
    }
  },
  data: function() {
    return {
      category: 'sweet',
      recipes: recipes
    };
  }
};
</script>

<style scoped>
</style>