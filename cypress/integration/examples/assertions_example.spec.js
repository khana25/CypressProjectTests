// Implicit Assertion = expect()
// explicit Assertion  = should()

// Two types of waiting mechanism available in Cypress

// Implicit wait:
// cy.get("jump to slide", {timeout:60000}).should('have.class', 'ls-nav-active');

//Explicit wait:
// cy.get("[aria-label='jump to slide 2']", {timeout:60000}).should(($x) => {
// expect($x).to.have.class('ls-nav-active');
//})


describe('Example to practice', () => {

    it('Testing EA site for assertion', () => {
        cy.visit("http://www.executeautomation.com/site/");
        
        //Implicit Wait
        cy.get("[aria-label='jump to slide 2']", {timeout:60000}).should('have.class', 'ls-nav-active');

        //Explicit Wait
        cy.get("[aria-label='jump to slide 2']", {timeout:60000}).should(($x) => {
            expect($x).to.have.class('ls-nav-active');
        })
    })
})