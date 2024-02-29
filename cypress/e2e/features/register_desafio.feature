Feature: Desafio de cadastro

  Scenario Outline: Desafio realizando cadastro
    Given que eu esteja na home MyAccount
    And realize meu cadastro com email "<email>" e senha "<senha>"
    When acessar Account Details
    And preencher os demais Dados nome "<nome>" e sobrenome "<sobrenome>"
    And salvar meus dados
    Then tenho meus dados atualizado com sucesso
    And posso realizar logout na aplicação
    And realizar login novamente com meus dados de acesso "<email>" e "<senha>"

    Examples: 
      | email          | senha       | nome   | sobrenome |
      | danniloery12@gmail.com | D1601y2401*#! | Danilo | Barbosa   |
