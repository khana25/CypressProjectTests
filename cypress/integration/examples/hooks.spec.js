//BeforeAll
//Before
//AftetAll
//After

describe('Example to practice', () => {

    beforeEach("Call for a particular it block", () => {
        cy.visit("http://www.executeautomation.com/site/");
    })

    it('Testing EA site for assertion', () => {

                //Implicit Wait
                cy.get("[aria-label='jump to slide 2']", {timeout:60000}).should('have.class', 'ls-nav-active');


    })

    it("Testing EA Site with Hooks", () => {

                //Explicit Wait
                cy.get("[aria-label='jump to slide 2']", {timeout:60000}).should(($x) => {
                    expect($x).to.have.class('ls-nav-active');
                })
    })
})