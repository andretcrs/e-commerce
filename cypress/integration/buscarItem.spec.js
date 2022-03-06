import BuscarItemPage from "../pages/BuscarItemPage";
import PaginaInicialPage from "../pages/PaginaInicialPage";

describe("Buscar item", () => {
  it("Realiza a busca pelo nome do item e válida retorno ", () => {
      PaginaInicialPage.acessarPaginaInicial()
      BuscarItemPage.buscarItem()
  })
});

describe("Pedido", () => {
  it("Realiza o pedido",() => {
      BuscarItemPage.realizaPedido();

      
  }) 
})