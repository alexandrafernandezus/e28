<template>
    <div>
        <h1>Shopping List</h1>

        <div v-if='items.length == 0'>No items</div>

        <ul v-else-if='recipes.length > 0'>
            <li v-for='item in items' :key='item.id'>
                <button @click='removeFromList(item.id)'>Remove</button>
                {{getRecipeDetails(item.id)['name']}}: {{getRecipeDetails(item.id)['ingredients']}}
            </li>
        </ul>
    </div>

</template>

<script>
import * as app from './../../app.js';

export default {
    name: 'ListPage',
    data: function() {
        return {
            items: [],
            list: null,
        };
    },
    methods: {
        getRecipeDetails(recipeId) {
            return this.recipes.find(({ id }) => id === recipeId);
        },
        removeFromList: function(recipeIngredients) {
            this.list.remove(recipeIngredients);
            app.store.cartCount = this.list.count();
        }
    },
    computed: {
        recipes: function(){
            return this.$store.state.recipes;
        }
    },
    mounted() {
        this.list = new app.List();
        this.items = this.list.getItems();


    }
};
</script>