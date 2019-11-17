<template>
    <div>
        <p>Welcome to the Whole Grain Guide!</p>

           <featured-recipe :category='sweet'></featured-recipe>

    </div>
</template>

<script>
import FeaturedRecipe from './FeaturedRecipe.vue';


export default {
  name: '',
  components: ['FeaturedRecipe'],
  data: function() {
    return {
    };
  }
};
</script>


<style scoped>
</style>