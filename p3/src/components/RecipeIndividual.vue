<template>
  <div>
      <router-link :to='{ name: "recipe", params: {"id": recipe.id, "name": recipe.name}}'>
    <div>{{ recipe.name }}</div>
    <img :alt='"Image of " + recipe.name' :src='"./../assets/images/" + recipe.id + ".jpg"' />
      </router-link>
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