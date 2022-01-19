var faker = require("faker")
var cpf = require("gerador-validador-cpf")

export default {
  formulario: function () {
    var firstName = faker.name.firstName()
    var lastName = faker.name.lastName()

    var data = {
      email: faker.internet.email(firstName),
      referencia: "12344",
      texto: "Duvida sobre o pedido 123 podem me ajudar",
      cnh: "cnh-digital.jpg",
    };
    return data
  }
  
  
  
  
}
