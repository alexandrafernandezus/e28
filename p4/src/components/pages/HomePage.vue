<template>
  <div>
    <h1>Welcome to the Whole Grain Guide!</h1>
    <p>We offer recipes for baked goods made with fresh-ground whole grains. Check out the grains we use <router-link to='/categories'>here</router-link>.</p>


    <featured-recipe :category='featuredCategory'></featured-recipe>
  </div>
</template>

<script>
import FeaturedRecipe from './../FeaturedRecipe.vue';

export default {
  name: 'HomePage',
  components: { FeaturedRecipe },
  data: function() {
    return {
      featuredCategory: 'featured'
    };
  }
};
</script>


<style scoped>
</style>