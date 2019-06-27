/// <reference types="Cypress" />

describe("Testing of EA App", () => {


    it("Login application", () => {

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
        cy.get('.btn').click({ force: true });

        cy.contains('Employee List').click();

        //cy.get('.table').find('tr').contains('Prashanth').parent().contains('Benefits').click();

        //cy.get('.table').find('tr').as("rows")
        //cy.get("@rows").then(($row) => {
        //   cy.wrap($row).click({multiple:true});
      //  })

    

        //verify the value from a property
        cy.wrap({ name: 'Karthik' }).should('have.property', 'name').and('eq', 'Karthik');


        cy.get('.table').find('tr > td').then(($td) => {
           cy.wrap($td).contains('John').invoke("wrap").parent().contains('Benefits').click();
           
        // Logout button
        cy.contains('Log off').click();  

        })
    })
})