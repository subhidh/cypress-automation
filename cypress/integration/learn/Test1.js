/// <reference types="Cypress" />


describe('My First Test Suite', function()
{

    it('My FirstTest case', function() {


    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
    cy.get('.search-keyword').type('ca')
    cy.wait(2000)
    cy.get('.product:visible').should('have.length', 4)
    cy.get('.products').as('productLocator') // to reuse
    cy.get('@productLocator').find('.product').should('have.length', 4)
    cy.get('@productLocator').find('.product').eq(0).contains('ADD TO CART').click()

    cy.get('@productLocator').find('.product').each(($el, index, $list) => {

        const textVeg = $el.find('h4.product-name').text()
        if(textVeg.includes('Carrot'))
        {
            cy.wrap($el).find('button').click()
        }
    })

    //to print in cypres logs
    cy.get('.brand').then(function(logoElement)
    {
        cy.log(logoElement.text())
    })





    }) // Test case

    it('Check brank name', function()
    {
        // to assert if the given data is correct or not
        cy.get('.brand').should('have.text','GREENKART')
    })

}) // Test Suite

describe('My First Test Suite', function()
{
    it('My FirstTest case', function() {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')
        cy.get('.products').as('productLocator') // to reuse
        cy.get('@productLocator').find('.product').each(($el, index, $list) => {

            const textVeg = $el.find('h4.product-name').text()
            if(textVeg.includes('Carrot'))
            {
                cy.wrap($el).find('button').click()
            }
        })
        cy.get('.cart-icon').find('img').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.contains('Place Order').click()
    })
})