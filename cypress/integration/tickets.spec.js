

describe("Tickets", function(){

    beforeEach(function() {
        cy.visit("https://ticket-box.s3.eu-central-1.amazonaws.com/index.html");
    });

    it("Has 'TICKETBOX' at header", function(){
        cy.get('#app header h1').should('have.text', 'TICKETBOX')
    })
})