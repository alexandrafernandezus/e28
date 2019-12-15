// https://docs.cypress.io/api/introduction/api.html

describe('WholeGrainGuide', () => {
  it('visits the homepage', () => {
    cy.visit('/');
    cy.contains('h2', 'Recipe of the Day');
  });

  let recipe = {
    name: 'Spelt Brownies',
    id: 1
  }

  it('shows all recipes', () => {
    cy.visit('/recipes');
    cy.contains('h2', 'Recipes');
    cy.contains('[data-test="recipe-name"]', recipe.name);
    cy.get('[data-test="recipe-name"]').should('have.length', 3);
    cy.get('[data-test="recipe-name"]').first().click();
    cy.contains('[data-test="individual-name"]', recipe.name);
  })
  
  it('tests shopping list functionality', () => {
    cy.visit('/recipe/' + recipe.id);
    cy.get('[data-test="add-to-list-button"]').click();
    cy.visit('/list');
    cy.contains('[data-test="list-contents"]', recipe.name);
    cy.get('[data-test="remove-from-list-button"]').click();
    cy.contains('No items');
  });
});
