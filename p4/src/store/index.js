import Vue from 'vue'
import Vuex from 'vuex'
import * as app from './../app.js';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        recipes: [],
    },
    mutations:{
        setRecipes(state, payload){
            state.recipes = payload;
        }
    },
    actions: {
        setRecipes(context) {
            app.axios.get(app.config.api + 'recipes').then(response => {
                context.commit('setRecipes', response.data)
            });
        }
    },
    getters: {
        getRecipeById(state) {
            return function (id) {
                return state.recipes.find(recipe => recipe.id == id);
            }
        }
    }
})