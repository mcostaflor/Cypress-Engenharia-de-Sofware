describe('US02: User wants to remove a todo', () => {

    beforeEach(() => {
        cy.visit('https://todolistme.net/')
    });

    it(`Scenario 1:
    GIVEN
        that I am on the homepage
    WHEN
        I click the delete button on the todo
    THEN
        it should remove the todo
    `, () => {
        var todo = 'Fazer os testes no Cypress';
        cy.get('#newtodo').type(`${todo}{enter}`);
        cy.get('#todo_7').within(() => {
            cy.get('img').click('center', { force: true });
        });
        cy.wait(1000);
        cy.get('#todolistpanel').should('not.contain', todo)
    });
});