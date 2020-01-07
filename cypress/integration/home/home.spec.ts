describe('Home page', () => {
	beforeEach(() => {
		cy.visit('/home');
	});

	it('displays the correct title', () => {
		cy.get('h2').contains('Home');
	});
});
