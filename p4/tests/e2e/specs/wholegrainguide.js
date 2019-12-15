// https://docs.cypress.io/api/introduction/api.html

describe('WholeGrainGuide', () => {
  it('visits the homepage', () => {
    cy.visit('/');
    cy.contains('h2', 'Recipe of the Day');
  });

  it('visits the grains page', () => {
    cy.visit('/categories');
    cy.contains('h1', 'Grains');
  });

  let recipe = {
    name: 'Spelt Brownies',
    id: 1
  }

  it('shows recipes list and individual recipe page details', () => {
    cy.visit('/recipes');
    cy.contains('h2', 'Recipes');
    cy.contains('[data-test="recipe-name"]', recipe.name);
    cy.get('[data-test="recipe-name"]').should('have.length', 3);
    cy.get('[data-test="recipe-name"]').first().click();
    cy.contains('[data-test="individual-name"]', recipe.name);
  });
  
  it('tests account page and form validation', () => {
    cy.visit('/account/');
    cy.contains('h1', 'Create An Account');
    cy.get('[data-test="email-address"]').type('0');
    cy.contains('Enter a valid e-mail')
  });
});
