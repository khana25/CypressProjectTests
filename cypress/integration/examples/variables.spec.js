/// <reference types="Cypress" />

describe("Testing of EA App", () => {


    it("Login application", () => {

        cy.visit("http://eaapp.somee.com/");


        // Long way to doing Promise (Closure operation)
        cy.get('#loginLink').then(($link) => {
            return $link.text();
            
            // const linkText = $link.text();
            //expect(linkText).is.eql('Login');
        }).as("linkText")

        cy.contains("Login").click();

        cy.get("@linkText").then(($x) => {
            expect($x).is.eql("Login")

        })

        cy.url().should("include", "/Account/Login");
        cy.get('#UserName').type("admin");
        cy.get('#Password').type("password");
        cy.get('.btn').click();

        // Logout button
        cy.contains('Log off').click();
    })

    it("2nd test case Login application", () => {

        cy.visit("http://eaapp.somee.com/");

    
        // Short-hand way of working with Promise using invoke
        cy.get('#loginLink').invoke('text').as("linkText")

        cy.contains("Login").click();

        cy.get("@linkText").then(($x) => {
            expect($x).is.eql("Login")

        })

        cy.url().should("include", "/Account/Login");
        cy.get('#UserName').type("admin");
        cy.get('#Password').type("password");
        cy.get('.btn').click();

        // Logout button
        cy.contains('Log off').click();
    })
})