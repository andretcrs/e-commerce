describe("home page", () => {
  it("app deve estar online", () => {
    //it descreve o caso de teste
    cy.viewport(1440, 900); // dimensiona o tamanho da tela
    cy.visit("https://buger-eats.vercel.app");
    cy.get("#page-home main h1").should("have.text", "Seja um parceiro entregador pela Buger Eats"); // .should é um assert
  });
});
