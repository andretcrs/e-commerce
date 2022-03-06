import LoginPage from "../pages/LoginPage";
import PaginaInicialPage from "../pages/PaginaInicialPage";


describe("Login", () => {
  it("Login ou Senha Inválida ", () => {
    PaginaInicialPage.acessarPaginaInicial();
    LoginPage.paginaLogin();
    LoginPage.informaDadosLoginIncorretos()
    LoginPage.clicaEntrar()
    LoginPage.alertMessageShouldBe(
      "Atenção: E-mail ou senha incorreto(s), ou sua conta ainda não foi ativada."
    );

  });
});

describe("Login", () => {
  it("Login com sucesso ", () => {
    PaginaInicialPage.acessarPaginaInicial();
    LoginPage.paginaLogin();
    LoginPage.informaDadosLoginCorretos()
    LoginPage.clicaEntrar();
 
  });
});

describe("Logout", () => {
  it("Logout com sucesso ", () => {
      LoginPage.deslogar()
  });
});

