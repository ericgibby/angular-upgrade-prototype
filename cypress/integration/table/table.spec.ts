describe('Table view', () => {
	beforeEach(() => {
		cy.server();
		cy.route({
			method: 'GET',
			url: '/api',
			response: 'fixture:users.json'
		}).as('getUsers');
		cy.visit('/table');
	});

	afterEach(() => {
		cy.server({ enable: false });
	});

	it('af-table loads users into table', () => {
		cy.wait('@getUsers');
		cy.get('af-table tbody tr').should('have.length', 5);
	});

	it('grid loads users into table', () => {
		cy.wait('@getUsers');
		cy.get('grid tbody tr').should('have.length', 5);
	});
});
