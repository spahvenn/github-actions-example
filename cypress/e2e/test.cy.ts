describe('Basic tests', () => {
  it('Visits the front page', () => {
    cy.visit('http://ip6-localhost:5173/github-actions-example');
    cy.contains('hello2');
  });
});
