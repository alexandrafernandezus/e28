<template>
  <div id="app">
    <img id="logo" alt="ZipFoods logo" src="./assets/images/zipfoods-logo.png" />

    <nav>
      <ul>
        <li>
          <router-link :to="{ name: 'home' }" exact>home</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'products' }">products</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'categories'}">categories</router-link>
        </li>
      </ul>
    </nav>

    <router-view></router-view>
  </div>
</template>

<script>
import { products } from "./products.js";

export default {
  name: "app",
  components: {},
  data: function() {
    return {
      products: products
    };
  }
};
</script>

<style lang='scss'>
@import "./assets/css/zipfoods.scss";
</style>
