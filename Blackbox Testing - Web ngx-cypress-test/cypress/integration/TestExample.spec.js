/// <reference types="cypress" />
describe(' first test suite', () => {
    it('visit form', () => {
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()
    });

    it('Second test suite', () => {
        cy.get('input[placeholder="Jane Doe"]').type('Mohammad Wahyu Prasetyo')
        cy.get('[placeholder ="Email"][type="text"]').type('mwpras0@gmail.com')
        cy.get('.custom-checkbox').first().click()
        cy.get('[status="primary"][type="submit"]')
        cy.contains('Submit')
    });

    it('Three test suite', () => {
        cy.get('#inputEmail1').type('mwpras0@gmail.com')
        cy.get('#inputPassword2').type('005052')
        cy.get('.text').contains('Option 1').click()
        cy.get('.text').contains('Option 2').click()
        cy.get('[status="primary"][type="submit"]')
        cy.contains('Sign in')
    })

    it('Four test suite', () => {
        cy.get('#exampleInputEmail1').type('mwpras0@gmail.com')
        cy.get('#exampleInputPassword1').type('005052')
        cy.get('.text').contains('Check me out').click()
        cy.get('[status="danger"][type="submit"]')
        cy.contains('Submit')
    })

    it('Five test suite, Labels', () => {
        cy.get('[placeholder="Recipients"]').type('M. Wahyu Prasetyo')
        cy.get('[placeholder="Subject"]').type('Project Cypress')
        cy.get('textarea[placeholder="Message"]').type('Tugas Pegujian Perangkat Lunak (PPL) - TI3D - Cypress')
        cy.get('[status="success"][type="submit"]')
        cy.contains('Send')
    })

    it('Six test suite', () => {
        cy.get('#inputFirstName').type('M. Wahyu')
        cy.get('#inputLastName').type('Prasetyo')
        cy.get('#inputEmail').type('mwpras0@gmail.com')
        cy.get('[status="primary"][type="submit"]')
        cy.contains('Submit')
    })

    it('Seven test suite, Horizontal', () => {
        cy.get('#inputEmail3').type('mwpras0@gmail.com')
        cy.get('#inputPassword3').type('005052')
        cy.get('.custom-checkbox').last().click()
        cy.get('[status="warning"][type="submit"]')
        cy.contains('Sign in')
    });

});