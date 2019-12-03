<template>
  <div>
    <h2>Grains</h2>
    <p>We believe that whole grains are the best grains. Below are the grains we cook with.</p>
    <ul>
      <li v-for='(category, id) in categories' :key='id'>{{ category }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'GrainsPage',
  data: function() {
    return {};
  },
  computed: {
    recipes: function() {
      return this.$store.state.recipes;
    },
    // Load categories via a computed property; because it depends on `products`
    // it will reactively be loaded once `products` is ready
    categories: function() {
      let grains = this.recipes.map(recipe => recipe.grains);
      let mergedCategories = [].concat.apply([], grains);

      // Return unique, sorted categories
      return [...new Set(mergedCategories)].sort();
    }
  }
};
</script>

<style scoped></style>
