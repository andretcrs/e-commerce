import FormularioFactory from "../factories/FormularioFactory";
import formularioContatoPage from "../pages/FormularioContatoPage";
 

describe("Formulario", () => {
  it("Validar formulário de contato", function () {
     var formulario = FormularioFactory.formulario()
     
    formularioContatoPage.go();
    formularioContatoPage.preencherFormulario(formulario)
    
  });
});

