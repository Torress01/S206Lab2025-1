/// <reference = cypress>

describe("Testes da criação, registro e login", () => {
  it("Teste criação de usuario com sucesso", () => {
    cy.visit(
      "https://globalsqa.com/angularJs-protractor/registration-login-example/#/login"
    )
    cy.get(".btn-link").click()
    cy.get("#firstName").type("Vitinho")
    cy.get("#Text1").type("Vitinho")
    cy.get("#username").type("Vitinho")
    cy.get("#password").type("Vitinho")
    cy.get(".btn-primary").click()
    cy.get(".ng-binding").should("contain.text", "Registration successful")
  })

  it("Teste criação de usuario com falha", () => {
    cy.visit(
      "https://globalsqa.com/angularJs-protractor/registration-login-example/#/login"
    )
    cy.get(".btn-link").click()
    cy.get("#firstName").type("Vitinho")
    cy.get("#Text1").type("Vitinho")
    cy.get("#username").type("Vitinho")
    cy.get(".btn-primary").should("be.disabled")
  })

  it("Teste de login com sucesso", () => {
    let infos = criarUser()
    cy.visit(
      "https://globalsqa.com/angularJs-protractor/registration-login-example/#/login"
    )
    cy.get("#username").type(infos[0])
    cy.get("#password").type(infos[1])
    cy.get(".btn-primary").click()
    cy.get("h1.ng-binding").should("contain.text", infos[0])
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
