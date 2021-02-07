describe('Transaction Flow', function() {
    
    before (function() {
        cy.fixture('example').then(function(data){
            this.data = data
        })  
    })    
    
    beforeEach (function() {  //Will be ececuted before every Testcase

        cy.visit(this.data.url) //Visit URL
        cy.url().should('include', 'instacred') //Verify URL
    
    })

    afterEach (function() {  //Will be ececuted after every Testcase
        
        //Screen 3
        cy.title().should('eq','InstaCred Cardless EMI') //Title Verification
        cy.get('button[id=submitButton]').should('not.be.enabled') //Confirm button should not be clickable if no option is selected
        cy.get('.mdc-radio__native-control[id=1001010]').should('not.be.checked').click() //Click on 1st Radio Button 
        cy.get('button[id=submitButton]').should('be.visible').click() //Click on Confirm Button
      
    })

        /* Test Case 1 */
	    it('Input Phone  Number', function() { 
        
            //Screen 1
		    cy.get('input[id=CI]').should('be.visible').should('be.enabled').type(this.data.mobileNo) //Enter Mobile Number
            cy.get('button[id=continueBtn]').should('be.visible').click() //Click on Continue Button

	    })

        /* Test Case 2 */
        it('Without Inputting Phone  Number', () => { 
        
            //Screen 1
            cy.get('button[id=continueBtn]').should('be.visible').click() //Click on Continue Button without inputting phone number
        
            //Screen 2
            cy.title().should('eq','InstaCred Cardless EMI') //Title Verification
            cy.get('button[id=submitButton]').should('be.visible').should('not.be.enabled') //Submit button should be clickable if Mobile number field is empty
            cy.get('input[id=payment-enter-mobile]').should('be.visible').type(this.data.mobileNo) //Enter Mobile Number
            cy.get('button[id=submitButton]').should('be.visible').should('be.enabled').click() //Click on Submit Button

	    })
})
