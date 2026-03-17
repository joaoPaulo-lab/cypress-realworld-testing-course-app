describe('check is user is subscribed',()=>{

    beforeEach(()=>{
        cy.visit('http://localhost:3000/')
        cy.get("#__next").should("be.visible")
    })
    //Happy path, o utilizador consegue se inscrever
    it('user can subscribe to application',()=>{
        
        cy.get('[data-test=email-input]').type("tom@aol.com")
        cy.get('[data-test=submit-button]').click()
        cy.get('[data-test=success-message]').should("exist").contains("tom@aol.com")
        
    })
    //Utilizador utiliza um e-mail invalido
    it('invalid e-mail address', ()=>{
        cy.get('[data-test=email-input]').type('invalid')
        cy.get('[data-test=submit-button]').click()
        cy.get('[data-test=success-message]').should("not.exist")
    })
    //Checa se o utilzador já está inscrito na "bd"
    it('User is already subscribed', ()=>{
         cy.get('[data-test=email-input]').type('john@example.com')
         cy.get('[data-test=submit-button]').click()
         cy.get('[data-test=server-error-message]')
         .contains('Error: john@example.com already exists. Please use a different email address.')
    })
})