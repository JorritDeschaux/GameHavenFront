
describe('Main back end tests', () => {
    it('Home page render', function() {
cy.visit('http://localhost:3000/');
cy.get('li')
cy.get('nav')

});


    it('Login and logout', function() {

        cy.visit('http://localhost:3000/');
        cy.get('.space-x-1 > .py-5').click();
        cy.get(':nth-child(1) > .appearance-none').clear();
        cy.get(':nth-child(1) > .appearance-none').type('jorritdesch@gmail.com');
        cy.get(':nth-child(2) > .appearance-none').clear();
        cy.get(':nth-child(2) > .appearance-none').type('test{enter}');
        cy.get('.btn').click();
        cy.get('h1')
          .should('contain', 'Hello')
        cy.get('.space-x-1 > .py-5').click();

    });

    it('Game info pages', function() {
        cy.visit('http://localhost:3000/');
        cy.get(':nth-child(1) > .flex > .bg-black').click();
        cy.get('img').should('be.visible')
        cy.get('div.game-header-info')
        cy.get('.font-bold').click();
        
        cy.get(':nth-child(2) > .flex > .bg-black').click();
        cy.get('img').should('be.visible')
        cy.get('div.game-header-info')
        cy.get('.space-x-4 > :nth-child(1) > .flex').click();

        cy.get(':nth-child(3) > .flex > .bg-black').click();
        cy.get('img').should('be.visible')
        cy.get('div.game-header-info')
        cy.get('.font-bold').click();
    });

    /* ==== Test Created with Cypress Studio ==== */
    it('About page', function() {
        /* ==== Generated with Cypress Studio ==== */
        cy.visit('localhost:3000');
        cy.get('[href="/about"]').click();
        cy.get('.space-x-4 > :nth-child(1) > .flex').click();
        /* ==== End Cypress Studio ==== */
    });

    /* ==== Test Created with Cypress Studio ==== */
    it('Profile page', function() {
        /* ==== Generated with Cypress Studio ==== */
        cy.visit('localhost:3000/login');
        cy.get(':nth-child(1) > .appearance-none').clear();
        cy.get(':nth-child(1) > .appearance-none').type('jorritdesch@gmail.com');
        cy.get(':nth-child(2) > .appearance-none').clear();
        cy.get(':nth-child(2) > .appearance-none').type('test{enter}');
        cy.get('.btn').click();
        cy.get('.logout').click();
        cy.get(':nth-child(4) > .appearance-none').clear();
        cy.get(':nth-child(4) > .appearance-none').type('van');
        cy.get('.btn').click();
        cy.get('.space-x-4 > .hidden > [href="/about"]').click();
        cy.get('.py-2').click();
        /* ==== End Cypress Studio ==== */
    });
})



