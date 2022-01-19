class LoginPage {
  go() {
    cy.visit('/')
    cy.get('.logo.img-responsive')
  }
  fazerLogin(login) {
    cy.get('.login').click()
    cy.get('.page-heading').should('have.text', 'Authentication')
    cy.get('#email').type('testeadm@gmail.com');
    cy.get("#passwd").type("TesteAutomacao123");
    cy.get('#SubmitLogin > span').click()
    cy.get('.page-heading').should('have.text','My account');
}
  loginInvalido(login){
    cy.get(".login").click();
    cy.get(".page-heading").should("have.text", "Authentication");
    cy.get("#email").type("testead@gmail.com");
    cy.get("#passwd").type("TesteAutomacao1");
    cy.get("#SubmitLogin > span").click();
    cy.get("ol > li").should("have.text", "Authentication failed.");
  }

}
export default new LoginPage
