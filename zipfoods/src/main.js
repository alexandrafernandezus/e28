import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import ProductsPage from './components/pages/ProductsPage.vue';
import HomePage from './components/pages/HomePage.vue';
import CategoriesPage from './components/pages/CategoriesPage.vue';
import ProductPage from './components/pages/ProductPage.vue';
import CartPage from './components/pages/CartPage.vue'

Vue.use(VueRouter);
Vue.config.productionTip = false;

const routes = [
  { path: '/', name: 'home', component: HomePage },
  { path: '/products', name: 'products', component: ProductsPage },
  { path: '/product/:id', name: 'product', component: ProductPage, props:true },
  { path: '/categories', name: 'categories', component: CategoriesPage },
  { path: '/cart', name: 'cart', component: CartPage },
];

const router = new VueRouter({
  mode: 'history',
  routes: routes
});

new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app');
