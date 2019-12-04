import { expect } from 'chai';
import { shallowMount, RouterLinkStub } from '@vue/test-utils';
import RecipeIndividual from '@/components/RecipeIndividual.vue';

describe('RecipeIndividual.vue', () => {
  it('shows an individual recipe', () => {
    let recipe = {
      id: 1,
      name: 'Spelt Brownies',
      description: 'Dense, fudgy, and simply delicious.',
      ingredients: [
        '3/4 cup spelt flour',
        '2 eggs',
        '1/2 cup greek yogurt',
        '1 mashed banana',
        '1 cup chocolate chips',
        '1/2 cup milk'
      ],
      instruction: [
        'Pre-heat oven to 350 degrees',
        'Grind Spelt',
        'Mix dry ingredients',
        'Add wet ingredients to dry ingredients',
        'Add to greased pan',
        'Bake uncovered for 25 minutes at 350 degrees '
      ],
      grains: 'spelt',
      categories: 'featured'
    };

    const wrapper = shallowMount(RecipeIndividual, {
      propsData: { recipe },
      stubs: {
        RouterLink: RouterLinkStub
      }
    });

    expect(wrapper.text()).to.include(recipe.name);

    let recipeIndividalLink = wrapper.find('[data-test="recipe-link"]').exists();
    expect(recipeIndividalLink).to.equal(true);
  });
});
