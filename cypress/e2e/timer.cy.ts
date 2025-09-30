it('counts seconds', { baseUrl: 'http://localhost:9090' }, () => {
  cy.visit('/')
  cy.get('#timer').should('have.text', '0')
  cy.get('#timer').should('have.text', '1')
  cy.get('#timer').should('have.text', '2')
  cy.get('#timer').should('have.text', '3')
  cy.get('#timer').should('have.text', '4')
  cy.get('#timer').should('have.text', '5')
})
