describe('US05: User wants to clear the done todos', () => {

    beforeEach(() => {
        cy.visit('https://todolistme.net/')
    });

    it(`Scenario 1:
    GIVEN
        that I am on the homepage
    WHEN
        I click the delete all done todos
    THEN
        it should delete all done todos
    `, () => {
        var todo = 'Fazer os testes no Cypress';
        var todo2 = 'Defender a terra dos invasores';
        cy.get('#newtodo').type(`${todo}{enter}`);
        cy.get('#newtodo').type(`${todo2}{enter}`);
        cy.get('#todo_7').within(() => {
            cy.get('input').click('center', { force: true });
        });
        cy.get('#todo_8').within(() => {
            cy.get('input').click('center', { force: true });
        });
        cy.wait(1000);
        cy.get('#belowdoneitemspanel').within(() => {
            cy.get('img').click('center', { force: true })
        })
        cy.wait(1000);
        cy.get('#mydonetodos').should('not.contain', todo)
        cy.get('#mydonetodos').should('not.contain', todo2)
    });
});