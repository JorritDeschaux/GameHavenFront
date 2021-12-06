describe("renders the home page", () => {
    it("renders correctly", () => {
        cy.visit("/")
        cy.get("Nav").should("exist")
    })
    it("data should be loaded", () => {
        cy.visit("/")
        cy.get("li").should("have.class", "gamecard")
    })
    it("search should work", () => {
        cy.visit("/")
        cy.get('.form-control').clear();
        cy.get('.form-control').type('game');
        cy.get('.btn').click();
    })
    it("home to about redirect", () => {
        cy.visit("/")
        cy.get('[href="/about"]').click();
    })
})