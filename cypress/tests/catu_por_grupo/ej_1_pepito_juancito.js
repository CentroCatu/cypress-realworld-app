/// <reference types="Cypress" />
describe("acciones de compra", function () {
  beforeEach(function () {
    cy.task("db:seed")
  })
  it("sign in", function () {
    // visitar localhost:3000
    // click en  Don't have an account? Sign Up
    // completar First Name "Carlos"
    // completar Last Name "Corach"
    // completar Username "Corach"
    // completar Paassword "secreto"
    // confirmar el password
    // click en Sign Up
    // (loguearse) completar username y password
    // click en Sign In
    // Next
    //completar Bank Name "BancoCurrex"
    //  completar Routing Number "987654321"
    // completar Account Number "123456789"
    // Save
    // Done
  })
  it("log in + agregar una cuenta bancaria", function () {
    // log in. user: Lue_Pagac , pass: s3cret
    //completar Bank Name "BancoCurrex"
    //  completar Routing Number "987654321"
    // completar Account Number "123456789"
    // click donde dice 'SAVE'
  })
  it.only("like ", function () {
    // log in. user: Lue_Pagac , pass: s3cret
    // click donde dice "Donnie Zboncak paid Enos Hintz"
    // darle Like
    // ir a la Home
    // comprobar que tenga un like
  })
})
