describe("Test Berkeley Group Website XHR", () => {

    beforeEach("Login to BG-Potal website", () => {
        cy.visit("https://www.berkeleygroup.co.uk/my-home/sign-in")
        cy.fixture("bguser").as("user");
    })
    
    it("Start the server", () => {
        //Login to BG-Portal site

        cy.get("@user").then((user) => {
            cy.get("#MYHOMESIGNIN_EMAIL").type(user.Username);
            cy.get("#MYHOMESIGNIN_FORMACTION_FINISH").click()
            cy.get("#MYHOMESIGNIN_PASSWORD").type(user.Password);
            cy.get("#MYHOMESIGNIN_FORMACTION_FINISH").click();
        })    
        cy.wait(10000)

  // Verify the response of XHR body
  //      cy.get("@portal").then(function(xhr){
  //          expect(xhr.status).to.eq(200)
  //          expect(xhr.response.body).to.have.property("name", "Test Cobham Wharf")

  //      })

  //Logout of the application
  cy.get('.span24 > [href="/my-home/sign-in?logout=1"]').click()
  cy.wait(5000)

    })
})