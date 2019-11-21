<template>
    <div v-if='recipe'>
        <h1>{{ recipe.name }}</h1>
        <img
            v-if='recipe.id'
            :alt='"Product image of  " + recipe.name'
            :src='"./../../assets/images/" + recipe.id + ".jpg"'
        />
        <p>{{ recipe.description }}</p>

        <h2> Ingredients </h2>
        <li v-for='ingredients in recipe.ingredients' :key='ingredients'>{{ ingredients }}</li>
        <button @click='addToList(recipe.id)'>Add to shopping list</button>
        <div v-if='shoppingAlert'>Shopping list updated.</div>

        <br>
        <h2> Instructions </h2>
        <li v-for='instructions in recipe.instructions' :key='instructions'>{{ instructions }}</li>

    
        <br>
        <router-link :to='"/recipes"'>&larr; Return to all recipes</router-link>
    </div>
</template>

<script>
import * as app from './../../app.js';

export default {
  name: 'RecipePage',
  props: ['id'],
  components: {},
  data: function() {
    return {
      recipe: null,
      shoppingAlert: false
    };
  },
  mounted() {
    app.axios
      .get(app.config.api + '/recipes/' + this.id)
      .then(response => {
        this.recipe = response.data;
      });
  },
  methods:{ 
      addToList: function(recipeId){
          let list = new app.List();
          list.add(recipeId);

          this.shoppingAlert = true;
          setTimeout(() => (this.shoppingAlert = false), 3000)
      }
  }
};
</script>

<style scoped></style>
