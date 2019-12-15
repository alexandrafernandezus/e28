<template>
  <div>
    <h1>Shopping List</h1>

    <div v-if='items.length == 0'>No items</div>

    <ul data-test='list-contents' v-else-if='recipes.length > 0'>
      <li v-for='item in items' :key='item.id'>
       <b> {{getRecipeDetails(item.id)['name']}}</b>
        <button data-test='remove-from-list-button' @click='removeFromList(item.id)'>Remove Recipe</button>
        <ul>
        <li
        v-for='ingredient in getRecipeDetails(item.id)["ingredients"]'
        v-bind:key='ingredient'>{{ ingredient }}
        <!-- <button @click='removeFromList(ingredient.id)'>Remove</button> -->
        </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import * as app from './../../app.js';

export default {
  name: 'ListPage',
  data: function() {
    return {
      items: [],
      list: null
    };
  },
  methods: {
    getRecipeDetails(recipeId) {
      return this.recipes.find(({ id }) => id === recipeId);
    },
    removeFromList: function(recipeIngredients) {
      this.list.remove(recipeIngredients);
      app.store.cartCount = this.list.count();
    }
  },
  computed: {
    recipes: function() {
      return this.$store.state.recipes;
    }
  },
  mounted() {
    this.list = new app.List();
    this.items = this.list.getItems();
  }
};
</script>