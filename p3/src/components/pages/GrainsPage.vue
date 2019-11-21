<template>
  <div>
    <h2>Grains</h2>
    <ul>
      <li v-for="(grain, id) in grains" :key="id">{{ grain }}</li>
    </ul>
  </div>
</template>

<script>
const axios = require('axios');

export default {
  name: 'GrainsPage',
  data: function() {
    return {
      recipes: null,
      grains: null
    };
  },
  methods: {
    loadCategories: function() {
      let grains = this.recipes.map(recipe => recipe.grains);
      let mergedCategories = [].concat.apply([], grains);

      // Return unique, sorted categories
      this.grains = [...new Set(mergedCategories)].sort();
    }
  },
  mounted() {
    axios
      .get(
        'https://my-json-server.typicode.com/alexandrafernandezus/e28-p3-api/recipes/'
      )
      .then(response => {
        this.recipes = response.data;
        this.loadCategories();
      });
  }
};
</script>

<style scoped></style>
