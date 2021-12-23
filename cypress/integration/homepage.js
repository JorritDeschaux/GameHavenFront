describe("renders the home page", () => {
    it("renders correctly", () => {
        cy.visit("/")
        cy.get("Nav").should("exist")
    })

    /* ==== Test Created with Cypress Studio ==== */
    it('home to login and logout', function() {
        /* ==== Generated with Cypress Studio ==== */
        cy.visit('http://localhost:3000/');
        cy.get('.space-x-1 > .py-5').click();
        cy.get(':nth-child(1) > label > .form-control').click();
        cy.get(':nth-child(1) > label > .form-control').clear();
        cy.get(':nth-child(1) > label > .form-control').type('t@t.nl');
        cy.get(':nth-child(2) > label > .form-control').clear();
        cy.get(':nth-child(2) > label > .form-control').type('test');
        cy.get('.btn').click();
        /* ==== End Cypress Studio ==== */
        /* ==== Generated with Cypress Studio ==== */
        cy.get('[href="/logout"] > svg').click();
        /* ==== End Cypress Studio ==== */
    });

    /* ==== Test Created with Cypress Studio ==== */
    it('home to game page', function() {
        /* ==== Generated with Cypress Studio ==== */
        cy.visit('http://localhost:3000/');
        cy.get(':nth-child(1) > .flex > .bg-black').click();
        /* ==== End Cypress Studio ==== */
    });
})