import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import HomePage from './components/pages/HomePage.vue';
import RecipesPage from './components/pages/RecipesPage.vue';
import RecipePage from './components/pages/RecipePage.vue';
import GrainsPage from './components/pages/GrainsPage.vue';
import ListPage from './components/pages/ListPage.vue';

Vue.use(VueRouter);
Vue.config.productionTip = false;

const routes = [
  { path: '/', component: HomePage, name: 'home' },
  { path: '/recipes', component: RecipesPage, name: 'recipes' },
  { path: '/recipe/:id', component: RecipePage, name: 'recipe', props: true },
  { path: '/categories', component: GrainsPage, name: 'grains' },
  { path: '/list', component: ListPage, name: 'shopping list' },
];

const router = new VueRouter({
  routes: routes,
  mode: 'history'
});

new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app');
