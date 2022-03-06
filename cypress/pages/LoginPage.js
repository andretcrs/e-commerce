class LoginPage {
  paginaLogin() {
    cy.get(".container > .login > a").click();
    cy.get(".title").should("have.text", "Acessar/Cadastrar");
  }

  informaDadosLoginIncorretos() {
    cy.get(".content > :nth-child(1) > input").type("joaogmail.com");
    cy.get(":nth-child(4) > input").type("MinhaAuto");
  }

  informaDadosLoginCorretos() {
    cy.get(".content > :nth-child(1) > input").type("joao@gmail.com");
    cy.get(":nth-child(4) > input").type("MinhaAuto123");
  }
  clicaEntrar() {
    cy.get(".button-login").click();
  
  }
  alertMessageShouldBe(expectedMessage) {
    //cy.get(".alert-error").should("have.text", expectedMessage)
    cy.contains(".warning", expectedMessage).should("be.visible");//combinar texto com classe em um unico elemento
  }

  mensagem () {
    cy.get(".title_page").should(
      "have.text",
      "\n\t\t\t\t\tMinha Conta\t\t\t\t\t\n\t\t\t\t\t\tDeslogar\t\t\t\t\t\n\t\t\t\t"
    );
}
  deslogar() {
    cy.get(
      '.container > .login > [href="https://www.bnw.net.br/moda-masculina/sair"]'
    ).click();
    cy.get("h1").should("have.text", "Sair da Minha Conta");
    cy.get(".button").click();
    cy.get(".fa.fa-user");
    cy.get(".container > .login > a").should(
      "have.text",
      "\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\tAcessar\t\t\t\t\t\t\t\t\t"
    );
  }
}
export default new LoginPage();
