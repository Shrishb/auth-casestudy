/// <reference types="cypress" />

context('Navigation', () => {
    beforeEach(() => {
      cy.visit('http://localhost:8080')
    })
  
    it('check the login page is rendered', () => {
        
      })


    it('cy.go() - go back or forward in the browser\'s history', () => {
      // https://on.cypress.io/go
  
      cy.location('pathname').should('include', 'navigation')
  
      cy.go('back')
      cy.location('pathname').should('not.include', 'navigation')
  
      cy.go('forward')
      cy.location('pathname').should('include', 'navigation')
  
      // clicking back
      cy.go(-1)
      cy.location('pathname').should('not.include', 'navigation')
  
      // clicking forward
      cy.go(1)
      cy.location('pathname').should('include', 'navigation')
  
   
      cy.title().should('include', 'Kitchen Sink')
    })
  
    // it('.submit() - submit a form', () => {
    //   // https://on.cypress.io/submit
    //   cy.get('.action-form')
    //     .find('[type="text"]').type('HALFOFF')
    //   cy.get('.action-form').submit()
    //     .next().should('contain', 'Your form has been submitted!')
    // })
  
    // it('cy.url() - get the current URL', () => {
    //   // https://on.cypress.io/url
    //   cy.url().should('eq', 'https://example.cypress.io/commands/location')
    // })
  })
  