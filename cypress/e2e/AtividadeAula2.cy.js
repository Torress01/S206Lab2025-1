/// <reference = cypress>
describe("Testes da criação, registro e login", () => {
  it("Deve criar, logar, excluir e não conseguir logar novamente", () => {
    let infos = criarUser()
    cy.visit(
      "https://globalsqa.com/angularJs-protractor/registration-login-example/#/login"
    )
    cy.get("#username").type(infos[0])
    cy.get("#password").type(infos[1])
    cy.get(".btn-primary").click()
    cy.get("h1.ng-binding").should("contain.text", infos[0])
    cy.get(".ng-binding > a").click()
    cy.visit(
      "https://globalsqa.com/angularJs-protractor/registration-login-example/#/login"
    )
    cy.get("#username").type(infos[0])
    cy.get("#password").type(infos[1])
    cy.get(".btn-primary").click()
    cy.get(".alert-danger").should(
      "contain.text",
      "Username or password is incorrect"
    )
  })
})

function criarUser() {
  let hora = new Date().getHours().toString()
  let minuto = new Date().getMinutes().toString()
  let seg = new Date().getSeconds().toString()
  let ID = hora + minuto + seg + "ID"
  let senha = hora + minuto + seg + "Senha"
  let infos = [ID, senha]

  cy.visit(
    "https://globalsqa.com/angularJs-protractor/registration-login-example/#/login"
  )
  cy.get(".btn-link").click()
  cy.get("#firstName").type(ID)
  cy.get("#Text1").type(ID)
  cy.get("#username").type(ID)
  cy.get("#password").type(senha)
  cy.get(".btn-primary").click()
  cy.get(".ng-binding").should("contain.text", "Registration successful")
  return infos
}
