import signupFactory from "../factories/SignupFactory"
import signupPage from "../pages/SignupPage"

describe("Signup", () => {
  // beforeEach(function(){
  //   cy.fixture('deliver').then((d)=>{ // busca o arquivo json
  //     this.deliver = d
  //   })
  // })

  it("User should be deliver", function () {
    var deliver = signupFactory.deliver()

    signupPage.go()
    signupPage.fillForm(deliver)
    signupPage.submit()

    const expectedMessage =
      "Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato."
    signupPage.modalContentShouldBe(expectedMessage)
  })

  it("Incorrect Document", function () { //cenário de tentativa
    var deliver = signupFactory.deliver()

    deliver.cpf = "000000141aa"
    signupPage.go()
    signupPage.fillForm(deliver)
    signupPage.submit()
    signupPage.alertMessageShouldBe("Oops! CPF inválido")
  })
  it("Incorrect E-mail", function () { // pode ser colocado o it.skip para pular o teste 
    var deliver = signupFactory.deliver()

    deliver.email = "user.com.br"
    signupPage.go()
    signupPage.fillForm(deliver)
    signupPage.submit()
    signupPage.alertMessageShouldBe("Oops! Email com formato inválido.")
  })

  context("Required fields", function () {  // verifica campos obrigatórios
    const message = [
      { field: "name", output: "É necessário informar o nome" },
      { field: "cpf", output: "É necessário informar o CPF" },
      { field: "email", output: "É necessário informar o email" },
      { field: "postalcode", output: "É necessário informar o CEP" },
      { field: "number", output: "É necessário informar o número do endereço" },
      { field: "delivery...method", output: "Selecione o método de entrega" },
      { field: "cnh", output: "Adicione uma foto da sua CNH" },
    ]
    before(function(){ 
      signupPage.go();
      signupPage.submit();
    })

    message.forEach(function(msg){ // passando por todos os campos obrigatórios
      it(`${msg.field} is required`, function(){
        signupPage.alertMessageShouldBe(msg.output)
      })
    })
  })
})
