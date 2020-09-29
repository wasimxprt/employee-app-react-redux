describe("Search form ", () => {
    it('Search Form', () => {
        cy.visit('/')
        cy.get('a').contains('Search').click();
        cy.get('.searchStr').type("HTML");
        cy.get('button').contains('Search').click();
    })
})
