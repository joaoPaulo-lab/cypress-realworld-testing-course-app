describe('check is user is subscribed',()=>{

    beforeEach(()=>{
        cy.visit('http://localhost:3000/')
        cy.get("#__next").should("be.visible")
    })

    it('user can subscribe to application',()=>{
        
        cy.getByData("email-input").type("tom@aol.com")
        cy.getByData("submit-button").click()
        cy.getByData("success-message").should("exist").contains("tom@aol.com")
        
    })
    it.only('invalid e-mail address', ()=>{
        cy.get('[data-test=email-input]').type('invalid')
        cy.get('[data-test=submit-button]').click()
        cy.get('[data-test=success-message]').should("not.exist")
    })
})