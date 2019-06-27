describe("Test Berkeley Group Website XHR", () => {

    beforeEach("Login to BG-Potal website", () => {
        cy.visit("https://www.berkeleygroup.co.uk/my-home/sign-in")
    }) 
    

    it("Perform Login and verify XHR", () => {
        //Start the server
        cy.server()
        
        cy.route({
            method: 'GET',
            url: '/api.cfc?method=getUserNotifications'
        }).as('portal')




        //Login to BG-Portal site
        cy.get("#MYHOMESIGNIN_EMAIL").type("investor5@gmail.com")
        cy.get("#MYHOMESIGNIN_FORMACTION_FINISH").click()
        cy.get("#MYHOMESIGNIN_PASSWORD").type("Myhomeplus1")
        cy.get("#MYHOMESIGNIN_FORMACTION_FINISH").click()

        cy.wait(10000)

 
        //Traffic interseption - Explicit Assertion
        cy.get("@portal").then(function(xhr){
            expect(xhr.status).to.eq(200)
            expect(xhr.response.body[0]).to.have.property("name", "Test Cobham Wharf")
        })

        //Implicit Assertion
       // cy.get("@portal").its('response.body').should('have.property', 'notifications')

       //Logout of the application
       cy.get('.span24 > [href="/my-home/sign-in?logout=1"]').click()
       cy.wait(5000)
    })

    it("Verify Berkeley Group User cookies", () => {
         //Login to BG-Portal site
         cy.get("#MYHOMESIGNIN_EMAIL").type("investor5@gmail.com")
         cy.get("#MYHOMESIGNIN_FORMACTION_FINISH").click()
         cy.get("#MYHOMESIGNIN_PASSWORD").type("Myhomeplus1")
         cy.get("#MYHOMESIGNIN_FORMACTION_FINISH").click()
 
         cy.wait(10000)
 
  
         //Traffic interseption - Explicit Assertion
         cy.getCookie("_gat_UA-28625272-1").should('have.property', 'value', '1')

         //Logout of the application
         cy.get('.span24 > [href="/my-home/sign-in?logout=1"]').click()
         cy.wait(5000)
         })
    })