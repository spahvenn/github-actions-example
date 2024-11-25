describe('Basic tests', () => {
  it('Visits the front page', () => {
    cy.visit('/');
    cy.contains('hello2');
  });
});
