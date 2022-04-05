/// <reference types="Cypress" />
describe('UI Conteols Automation', function()
{
    it('checkboxes', function() {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        //checking single checkboxex
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked').and('have.value','option1')

        // checking multiple chechboxes
        cy.get('input[type="checkbox"]').check(['option1', 'option3'])

    })

    it('static drop downs', function() {
        cy.get('select').select("option2").should('have.value','option2')
    })

    it('dynamic drop downs', function() {
        cy.get('#autocomplete').type('ind')
        cy.wait(1500)
        cy.get('.ui-menu-item div').each(($el, index, $list) => {

            if($el.text()==="India")
            {
                cy.wrap($el).click()
            }
        })
        cy.get('#autocomplete').should('have.value', 'India')
    })

    it('Visible Invisible Elements', function() {
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')
    })

    it('Radio Buttons', function() {
        cy.get('[value="radio2"]').check().should('be.checked')
    })
})

