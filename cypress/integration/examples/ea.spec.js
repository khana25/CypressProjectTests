/// <reference types="Cypress" />

describe("Testing of EA App", () => {

    it("Login application", () => {

        cy.visit("/");

        cy.contains("Login").click();

        cy.url().should("include", "/Account/Login")

        cy.get('#UserName').type("admin");
        cy.get('#Password').type("password");
        cy.get('.btn').click();
        cy.contains('Employee List').click();


        //Table
        //One way to get to the 'td' of the table
        // cy.get('.table').find('tr > td').filter('td')

        // Other way to get to the 'td' of the table
        //cy.get('.table').find('tr').filter('td')

        cy.get('.table').find('tr').contains('Prashanth').parent().contains('Benefits').click();
            //.contains('John').parent()
            //.contains('Benefits').click();

      // Logout button
        cy.contains('Log off').click();


    })
})