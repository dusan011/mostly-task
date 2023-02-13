export const fillForm = (firstName: string, lastName: string, businessEmail: string, mobilePhone: string, organizationName: string, country: string, message: string) => {
    cy.get('[name="firstname"]').type(firstName);
    cy.get('[name="lastname"]')
      .type(lastName);
    cy.get('[name="email"]')
      .type(businessEmail);
    cy.get('[name="mobilephone"]')
      .type(mobilePhone);
    cy.get('[name="company"]')
      .type(organizationName);
    cy.get('[name="country"]')
      .select(country);
    cy.get('[name="message"]')
      .type(message);
}