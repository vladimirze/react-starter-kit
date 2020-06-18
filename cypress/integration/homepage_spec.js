describe('Demo', () => {
    beforeEach(() => {
        cy.visit('http://localhost:1234/');
    });

    it('should find homepage title', () => {
        expect(true).to.equal(true);
        cy.get('[data-test-id="homepage"]').contains('Homepage');
    });
});
