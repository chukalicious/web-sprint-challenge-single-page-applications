describe('Testing our form', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3002/pizza')
        cy.get('[data-cy=customerName]').type('Customer Name').should('have.value', "Customer Name")
        cy.get('[type="checkbox"]').check().should('be.checked')
        cy.get('[type="radio"]').check().should('be.checked')
        cy.get('form').click()
        cy.get('[data-cy="instructions"]').type('Special Instructions').should("have.value", "Special Instructions")
    })
    it("Visits our local host", () => {
        cy.visit('http://localhost:3002/pizza')
    })
})