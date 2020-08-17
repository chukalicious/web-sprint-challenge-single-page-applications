describe('Testing our form', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3002/pizza')
        cy.get('[data-cy=customerName]')
        cy.get('form').click()
    })
    it("Visits our local host", () => {
        cy.visit('http://localhost:3002/pizza')
    })
})