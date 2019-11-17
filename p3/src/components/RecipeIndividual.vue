<template>
  <div>
    <div>{{ recipe.name }}</div>
    <img :alt='"Image of " + recipe.name' :src='"./../assets/images/" + recipe.id + ".jpg"' />
    <p class='recipe-items'>{{ recipe.description }}</p>
  </div>
</template>

<script>
export default {
  name: 'RecipeIndividual',
  props: ['recipe']
};
</script>

<style scoped>
</style>