<template>
  <div>
    <h2>Recipes</h2>
    <recipe-individual v-for='recipe in recipes' :key='recipe.id' :recipe='recipe'></recipe-individual>
  </div>
</template>

<script>
import RecipeIndividual from './../RecipeIndividual.vue';


export default {
  name: 'RecipesPage',
  components: { RecipeIndividual },
  data: function() {
    return {
    };
  },
  mounted(){

  },
  computed: {
    recipes: function(){
      return this.$store.state.recipes;
    }
  }
};
</script>

<style scoped>
</style>