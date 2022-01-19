class FormularioContatoPage {
  go() {
    cy.visit("/");
    cy.get(".logo.img-responsive"); 
  }
  preencherFormulario(formulario) {
    cy.get("#contact-link").click();
    cy.get(".navigation_page").should("have.text", "Contact");
    cy.get("#id_contact").select("Webmaster"); // seleciona opção entre a lista
    cy.get("#email").type(formulario.email);
    cy.get("#id_order").type(formulario.referencia);
    cy.get("#fileUpload").attachFile("/images/" + formulario.cnh);
    cy.get("#message").type(formulario.texto);
    cy.get("#submitMessage > span").click();
    cy.get(".alert").should("have.text", "Your message has been successfully sent to our team.");
  }
}

export default new FormularioContatoPage;
