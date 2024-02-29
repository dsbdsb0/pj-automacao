/// <reference types="Cypress" />
import RegisterPracticePage from "../pages/register_practice_page";

const registerPage = new RegisterPracticePage


Given(/^que eu esteja na home MyAccount$/, () => {
	registerPage.visitHome()
    //registerPage.clickPracticeSite()
    //registerPage.clickMyAccount()
});

Given(/^realize meu cadastro com email "([^"]*)" e senha "([^"]*)"$/, (email,pass) => {
	registerPage.inputRegister(email, pass)
	registerPage.btnRegistrar()
});

When(/^acessar Account Details$/, () => {
	registerPage.buttonAccountDetails()
});

When(/^preencher os demais Dados nome "([^"]*)" e sobrenome "([^"]*)"$/, (name,surname) => {
	registerPage.fillPersonalInformation(name, surname)
	
});

When(/^salvar meus dados$/, () => {
	registerPage.btnSave()
});

Then(/^tenho meus dados atualizado com sucesso$/, () => {
	
});

Then(/^posso realizar logout na aplicação$/, () => {
	registerPage.buttonLogout()
});

Then(/^realizar login novamente com meus dados de acesso "([^"]*)" e "([^"]*)"$/, (email,pass) => {
	registerPage.buttonLogin(email, pass)
	cy.contains("Dashboard")
});

