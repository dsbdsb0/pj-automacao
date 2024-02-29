/// <reference types="Cypress" />
import RegisterPage from "../pages/register_page";

const registerPage = new RegisterPage


Given(/^que estamos na page de Cadastro$/, () => {
	registerPage.visitPage()
});

Given(/^inserimos nosso Nome "([^"]*)" e Sobrenome "([^"]*)"$/, (name, surname) => {
	registerPage.fillNameAndSurname(name, surname)

});

Given(/^informarmos nossos dados de contato "([^"]*)", "([^"]*)" e "([^"]*)"$/, (address, email, phone) => {
	registerPage.fillContacs(address, email, phone)

});

Given(/^nosso genero como "([^"]*)" e hobbies "([^"]*)"$/, (gender, hobbies) => {
	registerPage.selectRadioGender(gender)
	registerPage.selectCheckHobbies(hobbies)

});

Given(/^nossa skill "([^"]*)" e nosso pais "([^"]*)"$/, (skill, country) => {
	registerPage.selectSkills(skill)
	registerPage.selectCountry(country)

});

When(/^eu selecionar meu nascimento "([^"]*)" , "([^"]*)" e "([^"]*)"$/, (year, month, day) => {
	registerPage.selectBirthDay(year, month, day)

});

When(/^inserir minhas senhas "([^"]*)" e "([^"]*)"$/, (pass, confir_pass) => {
	registerPage.inputPasswords(pass, confir_pass)
	registerPage.selectImage()

});

When(/^clico no botão cadastrar$/, () => {
	registerPage.btnSubmit()
});

Then(/^Tenho meu cadastro realizado com sucesso$/, () => {

});
