/// <reference types="cypress" />

context("Navigation", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080");
  });

  it("check the Top Nav section", () => {
    cy.get("img").each(($el) => {
      cy.wrap($el).should("have.attr", "alt");
    });
    cy.get(".nav-menu").should("contain", "About Frankie");
  });

  it("check the login page is rendered", () => {
    cy.get(".login-title > h1").should("contain", "Sign In");

    cy.get(".form-wrapper").within(() => {
      cy.get("input:first").should("have.attr", "placeholder", "Enter email");
      cy.get("input:last").should("have.attr", "placeholder", "Enter password");
      cy.get("a").should("contain", "Want to reset password?");
    });

    cy.get("button").should("contain", "Login");
  });

  it("check validations error show input is empty", () => {
    cy.get('button').click();

    cy.get("p").should("contain", "Please enter valid email");
    cy.get("p").should("contain", "Please enter password");
  });

  it("Reset password navigates to new page", () => {
    cy.get('#reset').click();
  
    cy.url().should('match', /reset/)
  });

  it('.submit() - submit a form', () => {
    cy.get('input[type="email"]').type('eve.holt@reqres.in')
    cy.get('input[type="password"]').type('cityslicka')

    cy.get('button').click();
    cy.get('.media-content > :nth-child(1)').should("contain", "Logged in Succesfully");
    cy.get('.media-content > :nth-child(3)').should("contain", "Response");
  })

  it('.submit() - submit a form error occurred', () => {
    cy.get('input[type="email"]').type('eve.holt@reqres')
    cy.get('input[type="password"]').type('cityslicka')

    cy.get('button').click();
    cy.get('.media-content > :nth-child(1)').should("contain", "Error Occured");
  })
});
