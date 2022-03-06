import FormularioPage from "../pages/formularioPage";
import PaginaInicialPage from "../pages/PaginaInicialPage";

describe("Formulário de contato", () => {
  it("Mensagem de validação de dados ", () => {
    PaginaInicialPage.paginaInicial();
    FormularioPage.preencherFormularioInvalido();
    FormularioPage.btnEnviarFormulario();
    FormularioPage.alertError("Atenção: Seu nome deve ter entre 3 e 32 caracteres!");
    FormularioPage.alertError("Atenção: Seu e-mail parece não ser válido!");
    FormularioPage.alertError("Atenção: O telefone não é válido!");
    FormularioPage.alertError("O telefone não é válido!");
    FormularioPage.alertError("Atenção: A mensagem deve ter entre 10 e 3000 caracteres!");
    FormularioPage.alertError("Você informou um CAPTCHA com valor incorreto.");
  });
  });




