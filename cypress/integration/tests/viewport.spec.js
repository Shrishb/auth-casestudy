// /// <reference types="cypress" />

// context('Viewport', () => {
//   beforeEach(() => {
//     cy.visit('https://example.cypress.io/commands/viewport')
//   })

//   it('cy.viewport() - set the viewport size and dimension', () => {

//     cy.get('#navbar').should('be.visible')
//     cy.viewport(320, 480)

//     // the navbar should have collapse since our screen is smaller
//     cy.get('#navbar').should('not.be.visible')
//     cy.get('.navbar-toggle').should('be.visible').click()
//     cy.get('.nav').find('a').should('be.visible')
//   })
// })
