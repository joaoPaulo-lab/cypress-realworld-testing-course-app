describe('check is user is subscribed',()=>{
    beforeEach(()=>{
        cy.visit('http://localhost:3000/')
        cy.get("#__next").should("be.visible")
    })
    it('user is subscribed',()=>{
        cy.getByData("email-input")
    })
})