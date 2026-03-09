// Describe block, aceita uma string de descriçao para o test e uma callback function 
//Each time you see it() within a given spec file that is a single test. 
// It takes the exact same arguments as the describe() function: 
// first a string and then a callback function. Let’s update the string to the following:


describe('enters website', () => {
  beforeEach(()=>{
    cy.visit('http://localhost:3000/')
    cy.get("#__next").should("be.visible")
     //Foi necessario adicionar para poder visualizar os elementos somente apos o site carregar
  })

  it('the h1 contains the correct text', () => {
    
    //Foi necessario adicionar para poder visualizar os elementos somente apos o site carregar
   
    cy.get('[data-test="hero-heading"]')
    .contains('Cypress')

    
  })
  it("The features on the homepage are correct",()=>{
      
     
      
      cy.get('dt').eq(0).contains('4 Courses')
      cy.get('dt').eq(1).contains('25+ Lessons')
      cy.get('dt').eq(2).contains('Free and Open Source')
      
      
    })
})