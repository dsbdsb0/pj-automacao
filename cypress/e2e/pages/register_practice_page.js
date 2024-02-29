/// <reference types="Cypress" />
import HomeElements from "../elements/home_elements"
import RegisterElements from "../elements/register_elements"
import HomeLogadaElement from "../elements/home_logada_elements"

const homeElements = new HomeElements
const registerElement = new RegisterElements
const homeLogadaElement = new HomeLogadaElement

const url = Cypress.config('baseUrl')

class RegisterPracticePage {

    visitHome() {
        cy.visit(url)
    }

    clickPracticeSite() {
        cy.get(homeElements.btnPracticeSite()).click()
    }

    clickMyAccount() {
        cy.get(homeElements.btnMyAccount()).click()
    }

    inputRegister(email, password) {
        
        cy.get(registerElement.inputPassword()).type(password).trigger('change')
        cy.get(registerElement.inputEmail()).type(email).tab().tab()
        
    }

    btnRegistrar() {
        cy.get(registerElement.btnRegister()).click()
    }

    buttonAccountDetails() {
        cy.get(homeLogadaElement.btnAccountDetatil()).click()
    }

    fillPersonalInformation(name, last_name) {
        cy.get(homeLogadaElement.inputFirstName()).type(name)
        cy.get(homeLogadaElement.inputLastName()).type(last_name)
    }

    btnSave() {
        cy.get(homeLogadaElement.btnSaveChanges()).click()
    }

    buttonLogout() {
        cy.get(homeLogadaElement.btnLogout()).click()
    }

    fillLogininformation(username, password) {
        cy.get(homeElements.inputUsername).type(username)
        cy.get(homeElements.inputPassword()).type(password)
    }

    buttonLogin(){
        cy.get(homeElements.btnLogin()).click()
    }


} export default RegisterPracticePage;