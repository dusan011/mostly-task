describe('Mostly.ai Task', () => {
    let formData;
    let utilData;

    before(() => {
      cy.fixture('form-data').then((formsFixture) => {
        formData = formsFixture;
      });
      cy.fixture('utils').then((utilsData) => {
        utilData = utilsData;
      });
    });

    beforeEach(() => {
      cy.visit(utilData.url);
    });
  
    it('displays bookmarks Platform, Synthetic Data, Resources, Company', () => {
     cy.get('#-mega-menu-1262-16 a[href="https://mostly.ai/synthetic-data-platform/"]').should('be.visible','Platform');
     cy.get('#-mega-menu-1262-16  a[href="https://mostly.ai/synthetic-data/"]').should('be.visible','Synthetic Data');
     cy.get('#-mega-menu-1262-16  a[href="https://mostly.ai/resources/"]').should('be.visible','Resources');
     cy.get('#-mega-menu-1262-16  a[href="https://mostly.ai/about-us/"]').should('be.visible','Company');
    });

  
   it('displays "Sorry, no results for: sythetic" when no results are found', () => {
        cy.get('#CookieBoxSaveButton').click({force:true});
        cy.get('[aria-label="Open search"]').click();
        cy.get('.oxy-header-search_search-field')
          .type('sythetic')
          .type('{enter}');
        cy.get('#section-27-1315 > .ct-section-inner-wrap')
          .should('contain','Sorry, no results for:')
          .and('contain','sythetic');
      });

    it('fills out the contact form and mouse over on send message button', () => {
        cy.get('#CookieBoxSaveButton').click({force:true});
        cy.get('#-mega-menu-1262-16 a[href="https://mostly.ai/about-us/"]').contains('Company')
          .click();
        cy.get('#div_block-3670-16').click();
        cy.get('body').click();
        cy.fillForm(formData.firstName, formData.lastName, formData.lastName, formData.mobilePhone, formData.organizationName, formData.country, formData.message);
        cy.get("input[type='checkbox'][name='LEGAL_CONSENT.subscription_type_5594858']")
          .check();
        cy.get('input[value="SEND MESSAGE"]')
          .trigger('mouseover');
      });
  });