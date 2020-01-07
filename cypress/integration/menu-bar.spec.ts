describe('Menu bar', () => {
	beforeEach(() => {
		cy.visit('/home');
		cy.get('.menu-bar .menu > li').as('menuItems');
	});

	describe('home link', () => {
		beforeEach(() => {
			cy.get('@menuItems')
				.eq(0)
				.as('homeLink');
		});

		it('displays correct text', () => {
			cy.get('@homeLink').contains('Home');
		});

		it('navigates to correct URL', () => {
			cy.visit('/table');
			cy.get('@homeLink').click();
			cy.location('pathname').should('eq', '/home');
		});

		it('has active style when on home page', () => {
			cy.get('@homeLink').should('have.class', 'is-active');
		});

		it('does not have active style when not on home page', () => {
			cy.visit('/table');
			cy.get('@homeLink').should('not.have.class', 'is-active');
		});
	});

	describe('new table link', () => {
		beforeEach(() => {
			cy.get('@menuItems')
				.eq(1)
				.as('newTableLink');
		});

		it('displays correct text', () => {
			cy.get('@newTableLink').contains('Table (New)');
		});

		it('navigates to correct URL', () => {
			cy.get('@newTableLink').click();
			cy.location('pathname').should('eq', '/table');
		});

		it('does not have active style when not on new table page', () => {
			cy.get('@newTableLink').should('not.have.class', 'is-active');
		});

		it('has active style when on new table page', () => {
			cy.get('@newTableLink')
				.click()
				.should('have.class', 'is-active');
		});
	});

	describe('old table link', () => {
		beforeEach(() => {
			cy.get('@menuItems')
				.eq(2)
				.as('oldTableLink');
		});

		it('displays correct text', () => {
			cy.get('@oldTableLink').contains('Table (Old)');
		});

		it('navigates to correct URL', () => {
			cy.get('@oldTableLink').click();
			cy.location('pathname').should('eq', '/old-table');
		});

		it('does not have active style when not on old table page', () => {
			cy.get('@oldTableLink').should('not.have.class', 'is-active');
		});

		it('has active style when on old table page', () => {
			cy.get('@oldTableLink')
				.click()
				.should('have.class', 'is-active');
		});
	});
});
