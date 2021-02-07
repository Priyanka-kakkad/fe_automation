describe('Input details Page', function() {
    beforeEach (function() {  //Will be ececuted before every Testcase

        cy.visit('https://staging.instacred.me/simulation/tpsl/e2e-transaction.jsp') //Visit URL
        cy.url().should('include', 'instacred') //Verify URL
    
    })

    afterEach (function() {  //Will be ececuted after every Testcase
        
        //Screen 3
        cy.title().should('eq','InstaCred Cardless EMI') //Title Verification
        cy.get('button[id=submitButton]').should('be.visible').should('not.be.enabled') //Confirm button should be clickable if no option is selected
        cy.get('.mdc-radio__native-control[id=1001010]').should('not.be.checked').click() //Click on 1st Radio Button 
        cy.get('button[id=submitButton]').should('be.visible').click() //Click on Confirm Button
        
    })

	it('Input Phone  Number', function() { //TestCase 1
        
        //Screen 1
		cy.get('input[id=CI]').should('be.visible').should('be.enabled').type("9988998899") //Enter Mobile Number
        cy.get('button[id=continueBtn]').should('be.visible').click() //Click on Continue Button

	})

    it('Without Inputting Phone  Number', () => { //TestCase 2
        
        //Screen 1
        cy.get('button[id=continueBtn]').should('be.visible').click() //Click on Continue Button without inputting phone number
        
        //Screen 2
        cy.title().should('eq','InstaCred Cardless EMI') //Title Verification
        cy.get('button[id=submitButton]').should('be.visible').should('not.be.enabled') //Submit button should be clickable if Mobile number field is empty
        cy.get('input[id=payment-enter-mobile]').should('be.visible').type("9988998899") //Enter Mobile Number
        cy.get('button[id=submitButton]').should('be.visible').should('be.enabled').click() //Click on Submit Button

	})
})
