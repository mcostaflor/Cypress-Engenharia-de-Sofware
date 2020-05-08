describe('US07: User wants to manage todo lists', () => {

    beforeEach(() => {
        cy.visit('https://todolistme.net/')
    });

    it(`Scenario 1:
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
    it(`Scenario 2:
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
    it(`Scenario 3:
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