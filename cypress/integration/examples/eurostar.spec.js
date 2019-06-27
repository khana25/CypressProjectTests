describe('Example to practice', () => {

    before("Visit the EA Testing site", () => {
        //visiting the site
        cy.visit("https://www.eurostar.com/uk-en/");
    
    })

    it('Login feature', () => {
        cy.get('[data-testid=footer-stayconnected]')
        cy.get(':nth-child(2) > .b1it60-2 > .b1it60-3').click();

        })
    })