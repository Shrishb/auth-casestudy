/// <reference types="cypress" />

context("Navigation", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080/reset");
  });

  it("check the reset page is rendered", () => {
    cy.get(".login-title > h1").should("contain", "New Password");

    cy.get(".form-wrapper").within(() => {
      cy.get("input:first").should("have.attr", "placeholder", "Enter new password");
      cy.get("input:last").should("have.attr", "placeholder", "Confirm your new password");
    });

    cy.get("button").should("contain", "Save");
  });

  it("check validations error show input is empty", () => {
    cy.get('button').click();

    cy.get("p").should("contain", "Please enter new passsword");
    cy.get("p").should("contain", "Please enter confirm password");
  });

  it('.submit() - save details succesfully', () => {
    cy.get('input[id="newPassword"]').type('cityslicka')
    cy.get('input[id="confirmPassword"]').type('cityslicka')

    cy.get('button').click();
    cy.get('.media-content > :nth-child(1)').should("contain", "Logged in Succesfully");
    cy.get('.media-content > :nth-child(3)').should("contain", "Response");
  })
});
