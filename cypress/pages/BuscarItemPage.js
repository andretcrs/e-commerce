class BuscarItemPage {
  buscarItem() {
    //buscar intem pelo  nome
    cy.get('.span4.busca_topo').type('Tênis Lacoste Lerond SEP');
    cy.get('.busca_topo > #search > .button-search').click();
    cy.get('h1').should(
      'have.text',
      'Resultados da busca para: Tênis Lacoste Lerond SEP'
    );
  }

  realizaPedido() {
    //clica no item encontrado
    cy.get('h4 > a').click();
    cy.get('h1').should('have.text', 'Tênis Lacoste Lerond SEP');
    cy.get(".dropdown-togglet").click();
    
  }
}

export default new BuscarItemPage();
