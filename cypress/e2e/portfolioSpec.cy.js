/// <reference types="Cypress" />

describe('home page', () => {
  it('passes', () => {
    cy.visit('https://jeffreylee.tech/#')
  })
})