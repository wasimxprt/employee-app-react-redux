describe("Employee Form ", () => {
    context('Add Employee Form', () => {
        it.only('Adds a new employee on submit', () => {
            cy.visit('/')
            cy.get('a').contains('Add Employee').click({force: true});
            cy.get('.fname').type("Cypress fname")
            cy.get('.lname').type("Cypress lname")
            cy.get('.designation').type("Manual Tester")
            cy.get('.hireDate').type("10-10-2015")
            cy.get('button').contains('10').click();
            cy.get('.materialize-textarea').type("cypress,selenium")
            cy.get('button').contains('Submit').click();
            cy.get('table').contains('td', 'Cypress fname');
        })
    })
})
