class PaginaInicialPage {
  acessarPaginaInicial() {
    cy.visit('/')
    cy.get(".logo_topo > #logo > a > img")
    cy.get("#stick_bar_button_close").click()
  }
}
export default new PaginaInicialPage
