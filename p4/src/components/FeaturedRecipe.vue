<template>
  <div id='featured'>
    <h2>Recipe of the Day</h2>
    <ul>
      <li v-for='recipe in featuredList' :key='recipe.id'><h3>{{ recipe.name }}</h3>
          <img
            v-if='recipe.id'
            :alt='"Product image of  " + recipe.name'
            :src='"./../assets/images/" + recipe.id + ".jpg"'
        />
      </li>

      </ul>
  </div>

</template>

<script>
import { recipes } from './../recipes.js';

export default {
  name: 'FeaturedRecipe',
  props: ['category'],
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
      recipes: recipes
    };
  }
};
</script>

<style scoped>
</style>