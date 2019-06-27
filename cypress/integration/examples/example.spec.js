describe('Example tp practice', () => {

    it('Login feature', () => {
        cy.visit("http://eaapp.somee.com/");
        cy.get('#loginLink').click();

        cy.url().should('include', '/Account/Login')
        cy.get('#UserName').type('admin');
        cy.get('#Password').type('password');
        cy.get('.btn').click();

        cy.contains('Employee List').click();
        cy.url().should('include', '/Employee');

        // cy.get('table').find('tr').contains('Prashanth').parent().contains('Benefits').click();

       // cy.get('table').find('tr').as("rows");
       // cy.get("@rows").then(($row) => {
       //     cy.wrap($row).click({ multiple: true });

       // })

        cy.wrap({ name: 'Karthik' }).should('have.property', 'name').and('eq', 'Karthik');

        cy.get('table').find('tr > td').then(($td) => {
            cy.wrap($td).contains('John').invoke('wrap').parent().contains('Benefits').click();

        // Logout button
        cy.contains('Log off').click();    

        })
    })
})