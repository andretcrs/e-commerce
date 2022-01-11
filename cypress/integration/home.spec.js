describe("home page", () => {
  it("app deve estar online", () => {
    //it descreve o caso de teste
    cy.visit('/');
    cy.get('h1').should("have.text", "Seja um parceiro entregador pela Buger Eats"); // .should é um assert
  });
});
