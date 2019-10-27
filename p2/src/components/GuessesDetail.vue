<template>
  <div>
    <ul>
      <li>{{ answer }}</li>
    </ul>
    <button @click="$emit('delete-round', number)">Hide Guess</button>
  </div>
</template>

<script>
module.exports = {
  data: function() {
    return {};
  },
  props: {
    number: Number,
    answer: Number
  },
  template: "#guesses-detail"
};
</script>

<style>
</style>