describe('Calculadora de imposto', () => {
    it('deve limpar os campos', () => {
        cy.visit('https://andreendo.github.io/sample-ui-compras/index-2.html');
        cy.get('[name=nome]').type('John');
        cy.get('[name=idade]').type('20');
        cy.get('[name=sexo]').select('M');
        cy.get('[name=salario]').type('2000');
        cy.get(`[value='Limpar campos']`).click();

        cy.get('[name=nome]').should('have.text', '');
        cy.get('[name=idade]').should('have.text', '');
        cy.get('[name=sexo]').should('have.value', '-');
        cy.get('[name=salario]').should('have.text', '');
    });

    it('deve calcular o imposto devido', () => {
        cy.visit('https://andreendo.github.io/sample-ui-compras/index-2.html');
        cy.get('[name=nome]').type('Marcus');
        cy.get('[name=idade]').type('21');
        cy.get('[name=sexo]').select('M');
        cy.get('[name=salario]').type('6000');

        cy.get(`[value='Calcular']`).click();
       
        cy.get('[id=divNome]').should('have.text', 'Nome: Marcus');
        cy.get('[id=divIdade]').should('have.text', 'Idade: 21');
        cy.get('[id=divSexo]').should('have.text', 'Sexo: M');
        cy.get('[id=divValorImposto]').should('have.text', 'Valor a pagar de imposto: 1500');

    });
});