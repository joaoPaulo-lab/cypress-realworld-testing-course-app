//Registar jornada do utilizador

import { forEach } from "lodash"

//Esta função seleciona a resposta pelo utilizador e depois carrega no botão 'proxima lição',
//para todos os cursos os botões possuem a mesma identificação 'Data-test' por isso foi possivel criar uma função
//para executar os testes automaticamente ao alimentar somente as urls que devem ser validadas

let selecionarRespostaProxPag = ()=>{
    cy.get('[data-test=challenge-answer-0]')
        .click()

    cy.get('[data-test=next-lesson-button]')
    .click()
} 

let validaPath = (caminho)=>{
    cy.location('pathname').should('eq',caminho)
}

//Para testar os cursos e necessario repetir muitas vezes este codigo, por isso criei funçoes para iterar sobre os cursos
//agora só é necessario criar uma lista com os paths para validar e alimentar a esta função
let testaCurso = (caminhos)=>{

    caminhos.forEach((caminho)=>{
        validaPath(caminho)
        selecionarRespostaProxPag()
    })
}

describe('User journey',()=>{
    //Executar antes de cada
    beforeEach(()=>{
        cy.visit('http://localhost:3000')
        cy.get("#__next").should("be.visible")
    })
    
    context('courses',()=>{

        it('Journey course 0',()=>{
            
    
            //Seleciona o terceiro A (botao) e click
            cy.get('[data-test=course-0]')
            .find('a')
            .eq(3)
            .click()
            //valida url
    
            validaPath('/testing-your-first-application')
    
            cy.get('[data-test=next-lesson-button]')
            .click()
    
            testaCurso(['/testing-your-first-application/app-install-and-overview',
                '/testing-your-first-application/installing-cypress-and-writing-our-first-test',
                '/testing-your-first-application/setting-up-data-before-each-test',
            ])

            //curso finalizado, utilizador retorna a pag inicial
            cy.location('href').should('eq','http://localhost:3000/')
        })
   

    
        it('Journey course 1',()=>{
            //Iniciar o curso com o botao
            cy.get('[data-test=course-1]')
            .find('a')
            .eq(3)
            .click()

            cy.location('pathname').should('eq','/testing-foundations')
            

            cy.get('[data-test=next-lesson-button]')
            .click()

            testaCurso(['/testing-foundations/testing-is-a-mindset',
                '/testing-foundations/knowing-what-to-test',
                '/testing-foundations/manual-vs-automated-testing'
            ])
            

            cy.location('href').should('eq','http://localhost:3000/')

        })

        it('Journey course 2',()=>{ 
            //Iniciar o curso com o botao
            cy.get('[data-test=course-2]')
            .find('a')
            .eq(3)
            .click()
            
            validaPath('/cypress-fundamentals')

            cy.get('[data-test=next-lesson-button]')
            .click()

            testaCurso(['/cypress-fundamentals/how-to-write-a-test',
                '/cypress-fundamentals/cypress-runs-in-the-browser',
            '/cypress-fundamentals/command-chaining'])

            cy.location('href').should('eq','http://localhost:3000/')
        })
    })
    
})