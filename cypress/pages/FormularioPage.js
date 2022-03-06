import FormularioFactory from "../factories/FormularioFactory";

class FormularioPage {
  preencherFormularioInvalido(formulario) {
    var formulario = FormularioFactory.formulario();

    cy.get(".nav-collapse > .nav > :nth-child(6) > a > .menu-title").click();
    cy.get("h1").should("have.text", "Contate-nos");
    cy.get('[name="name"]').type(formulario.nomeInvalido);
    cy.get('[name="email"]').type(formulario.emailInvalido);
    cy.get(".mask_phone").type(formulario.telefoneInvalido);
    cy.get("textarea.form-control").type(formulario.mensagemInvalida);
  }

  btnEnviarFormulario() {
    cy.get(".button").click();
  }

  alertError(expectedMessage) {
    cy.contains(".error", expectedMessage).should("be.visible"); //combinar texto com classe em um unico elemento
  }
}

export default new FormularioPage
