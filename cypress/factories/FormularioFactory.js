var faker = require("faker")
var cpf = require("gerador-validador-cpf")

export default {
  formulario: function () {
    var firstName = faker.name.firstName()
    var lastName = faker.name.lastName()

    var data = {
      //Dados invaálidos
      nomeInvalido: `${firstName} ${lastName}Teste limiete caracteressssssssssssssssssssssssssssssssssssssssssssssssss`,
      emailInvalido: "JoaodaSilva.com.br",
      telefoneInvalido: "51 99",
      mensagemInvalida: "Teste?",
    };
    return data
  }
  
}
