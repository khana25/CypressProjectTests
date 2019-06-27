describe('Example to practice', () => {

    before("Visit the EA Testing site", () => {
        //visiting the site
        cy.visit("http://eaapp.somee.com/");
        cy.get('#loginLink').click();
        cy.fixture("eauser").as("user");
        
    })

    after("Logout from the site after completion of tests", () => {
        // Logout button
        cy.contains('Log off').click();
    })

    it('Login feature', () => {
        cy.get("@user").then((user) => {
            cy.get("#UserName").type(user.UserName);
            cy.get("#Password").type(user.Password);
        })
    
        cy.get('.btn').click();

        cy.contains('Employee List').click();
        cy.url().should('include', '/Employee');


        cy.wrap({ name: 'Karthik' }).should('have.property', 'name').and('eq', 'Karthik');

        cy.get('table').find('tr > td').then(($td) => {
            cy.wrap($td).contains('John').invoke('wrap').parent().contains('Benefits').click();

        })
    })
})