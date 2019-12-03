<template>
  <div>
    <p>Welcome to the Whole Grain Guide!</p>

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