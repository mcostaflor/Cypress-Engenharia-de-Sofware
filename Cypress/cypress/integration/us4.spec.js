describe('US04: User wants to mark a done todo as undone', () => {

    beforeEach(() => {
        cy.visit('https://todolistme.net/')
    });
  
    it(`Scenario 1:
    GIVEN
        that I am on the homepage
    WHEN
        I click the undone button on the done todo
    THEN
        it should mark the todo as not done
    `, () => {
        var todo = 'Fazer os testes no Cypress';
        cy.get('#newtodo').type(`${todo}{enter}`);
        cy.get('#todo_7').within(() => {
            cy.get('input').click('center', { force: true });
        });
        cy.wait(1000);
        cy.get('#todolistpanel').should('not.contain', todo)
        cy.get('#mydonetodos').should('contain', todo)
        cy.get('#todo_7').within(() => {
            cy.get('input').click('center', { force: true });
        });
        cy.wait(1000);
        cy.get('#todolistpanel').should('contain', todo)
        cy.get('#mydonetodos').should('not.contain', todo)
    });
    it(`Scenario 2:
    GIVEN
        that I am on the homepage
    WHEN
        I click the undone button on the done todo
    THEN
        it should mark the todo as not done
    `, () => {
        var todo = 'Fazer os testes no Cypress';
        cy.get('#newtodo').type(`${todo}{enter}`);
        cy.get('#todo_7').trigger('mousedown', { which: 1 });
        cy.get('#mydonetodos').trigger('mousemove', 'center').trigger('mouseup', { force: true });
        cy.wait(1000);
        cy.get('#todolistpanel').should('not.contain', todo)
        cy.get('#mydonetodos').should('contain', todo)
        cy.get('#todo_7').trigger('mousedown', { which: 1 });
        cy.get('#todolistpanel').trigger('mousemove', 'center').trigger('mouseup', { force: true });
        cy.wait(1000);
        cy.get('#todolistpanel').should('contain', todo)
        cy.get('#mydonetodos').should('not.contain', todo)
    });
});