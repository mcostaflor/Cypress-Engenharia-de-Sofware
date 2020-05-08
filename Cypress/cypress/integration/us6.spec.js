describe('US06: User wants to sort the list', () => {

    beforeEach(() => {
        cy.visit('https://todolistme.net/')
    });

    it(`Scenario 1:
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
});