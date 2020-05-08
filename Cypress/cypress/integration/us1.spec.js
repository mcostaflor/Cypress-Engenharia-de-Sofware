describe('US01: Test Todo List', () => {

    beforeEach(() => {
        cy.visit('https://todolistme.net/')
    });

    it.only(`Scenario 1:
    GIVEN
        that I am on the homepage
    WHEN
        fill the new todo field and click on the add button
    THEN
        it should add the new todo to the list
    `, () => {
        var todo = 'Fazer os testes no Cypress';
        cy.get('#newtodo').type(`${todo}`);
        cy.get('#todolistpanel').should('contain', todo)
    });
    it(`Scenario 2:
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
    it(`Scenario 3:
    GIVEN
        that I am on the homepage
    WHEN
        I click the done button on the todo
    THEN
        it should mark the todo as done
    `, () => {
        var todo = 'Fazer os testes no Cypress';
        cy.get('#newtodo').type(`${todo}{enter}`);
        cy.get('#todo_7').within(() => {
            cy.get('input').click('center', { force: true });
        });
        cy.wait(1000);
        cy.get('#todolistpanel').should('not.contain', todo)
        cy.get('#mydonetodos').should('contain', todo)
    });
    it(`Scenario 3.1:
    GIVEN
        that I am on the homepage
    WHEN
        I drag a todo to the done list
    THEN
        it should mark the todo as done
    `, () => {
        var todo = 'Fazer os testes no Cypress';
        cy.get('#newtodo').type(`${todo}{enter}`);
        cy.get('#todo_7').trigger('mousedown', { which: 1 });
        cy.get('#mydonetodos').trigger('mousemove', 'center').trigger('mouseup', { force: true });
        cy.wait(1000);
        cy.get('#mydonetodos').should('contain', todo)
    });
    it(`Scenario 4:
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
    it(`Scenario 4.1:
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
    it(`Scenario 5:
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
    it(`Scenario 6:
    GIVEN
        that I am on the homepage
    WHEN
        I click the sort alphabetically
    THEN
        it should sort the list alphabetically
    `, () => {

        cy.get('#sortbutton').trigger('mouseover');
        cy.get('#sort1').click('center', { force: true });
        cy.get('#todolistpanel div ul li').first().should('contain', 'All changes are saved locally, automatically.')

        cy.get('#sortbutton').trigger('mouseover');
        cy.get('#sort0').click('center', { force: true });
        cy.get('#todolistpanel div ul li').first().should('not.contain', 'All changes are saved locally, automatically.')
    });
    it(`Scenario 7:
    GIVEN
        that I am on the homepage
    WHEN
        I click another todo list
    THEN
        it should show the new other list
    `, () => {
        cy.wait(1000);
        cy.get('#list_1').click('center');
        cy.get('#mytitle').should('contain', 'Projects')
        cy.wait(1000);
        cy.get('#list_0').click('center');
        cy.get('#mytitle').should('contain', `Today's Tasks`)
    });
    it(`Scenario 8:
    GIVEN
        that I am on the homepage
    WHEN
        I click the new list button
    THEN
        it should create a new list
    `, () => {
        cy.wait(1000);
        cy.get('#addlist').click('center');
        cy.wait(500);
        cy.get('#updatebox').type('Lista Nova');
        cy.get('[type="submit"]').click()
        cy.get('#mytitle').should('contain', `Lista Nova`)
    });
    it(`Scenario 9:
    GIVEN
        that I am on the homepage
    WHEN
        I click the new category button
    THEN
        it should create a new category
    `, () => {
        cy.wait(1000);
        cy.get('#adddivider').click('center');
        cy.wait(500);
        cy.get('#updatebox').type('Categoria Nova');
        cy.get('[type="submit"]').click()
        cy.get('#category_1').should('contain', `Categoria Nova`)
    });
});