Feature: Cadastro de usuarios
Cadastro de usuarios na plataforma

  Scenario Outline: "<caso_teste>"
    Given que estamos na page de Cadastro
    And inserimos nosso Nome "<name>" e Sobrenome "<surname>"
    And informarmos nossos dados de contato "<address>", "<email>" e "<phone>"
    And nosso genero como "<gender>" e hobbies "<hobbies>"
    And nossa skill "<skill>" e nosso pais "<country>"
    When eu selecionar meu nascimento "<year>" , "<month>" e "<day>"
    And inserir minhas senhas "<pass>" e "<confirm_pass>"
    And clico no botão cadastrar
    Then Tenho meu cadastro realizado com sucesso

    Examples: 
      | caso_teste           | name   | surname | address                    | email            | phone       | gender | hobbies | skill      | country   | year | month   | day | pass     | confirm_pass |
      | Cadastro com sucesso | Danilo | Barbosa | Rua Madre Maria Vilac, 178 | danilo@gmail.com | 11968786960 | Male   | Movies  | Javascript | Australia | 1975 | January |  14 | 1234@123 |     1234@123 |
