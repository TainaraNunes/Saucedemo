/// <reference types="Cypress" />
import { slowCypressDown } from 'cypress-slow-down'
slowCypressDown()

describe('Saucedemo', function() {

    it('Validar fluxo de login', function() {
        
        //Acessa a pagina
        cy.visit("https://www.saucedemo.com/")

        //Informa usuario, senha e clica em login        
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()

        //Valida se o usuário é redirecionado corretamente para a página inicial (Produtos) após o login
        cy.get('.title').should('contain', 'Products')
    })

    it('Validar menu lateral - Opcao All items', function() {

        //Acessa a pagina
        cy.visit("https://www.saucedemo.com/")

        //Informa usuario, senha e clica em login        
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()

        //Abre menu lateral
        cy.get('#react-burger-menu-btn').click()

        //Seleciona opcao All items
        cy.get('#inventory_sidebar_link').click()
    })
    
    it('Validar menu lateral - Opcao About', function() {

        //Acessa a pagina
        cy.visit("https://www.saucedemo.com/")

        //Informa usuario, senha e clica em login        
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()

        //Abre menu lateral
        cy.get('#react-burger-menu-btn').click()

        //Seleciona opcao About
        cy.get('#about_sidebar_link').click()
    })

    it('Validar menu lateral - Opcao Logout', function() {

        //Acessa a pagina
        cy.visit("https://www.saucedemo.com/")

        //Informa usuario, senha e clica em login        
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()

        //Abre menu lateral
        cy.get('#react-burger-menu-btn').click()

        //Seleciona opcao Logout
        cy.get('#logout_sidebar_link').click()
    })

    
    it('Validar menu lateral - Opcao Reset app state', function() {

        //Acessa a pagina
        cy.visit("https://www.saucedemo.com/")

        //Informa usuario, senha e clica em login        
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()

        //Abre menu lateral
        cy.get('#react-burger-menu-btn').click()

        //Seleciona opcao Reset app state
        cy.get('#reset_sidebar_link').click()
    })

    it.only('Validar se produtos sao apresentados corretamente', () => {
        //Acessa a pagina
        cy.visit("https://www.saucedemo.com/")

        //Informa usuario, senha e clica em login        
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        
        cy.get('.inventory_item_name').contains('Sauce Labs Bike Light')

    });


    it('Adicionar produto no carrinho e realizar a compra', function() {

        //Acessa a pagina
        cy.visit("https://www.saucedemo.com/")

        //Informa usuario, senha e clica em login        
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()

        //Adiciona o produto no carrinho
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()

        //Acessa o carrinho
        cy.get('.shopping_cart_link').click()   
        
        //Prossegue com a compra
        cy.get('[data-test="checkout"]').click()

        //Informa dados pessoais
        cy.get('[data-test="firstName"]').type('Henrique')
        cy.get('[data-test="lastName"]').type('Beloli')
        cy.get('[data-test="postalCode"]').type('85660000')
        
        //Prossegue
        cy.get('[data-test="continue"]').click()

        //Finaliza a compra
        cy.get('[data-test="finish"]').click()

        //Volta para a home
        cy.get('[data-test="back-to-products"]').click()
        
    });


    it('Adicionar produto no carrinho em seguida remover e continuar comprando', function() {

        //Acessa a pagina
        cy.visit("https://www.saucedemo.com/")

        //Informa usuario, senha e clica em login        
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()

        //Adiciona o produto no carrinho
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()

        //Acessa o carrinho
        cy.get('.shopping_cart_link').click()       

        //Remove o produto do carrinho
        cy.get('[data-test="remove-sauce-labs-backpack"]').click()

        //Continuar comprando
        cy.get('[data-test="continue-shopping"]').click()
    })

    it('Selecionar produto, adicionar no carrinho e continuar comprando', function() {

        //Acessa a pagina
        cy.visit("https://www.saucedemo.com/")

        //Informa usuario, senha e clica em login        
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()

        //seleciona o produto
        cy.get('#item_4_title_link').click()

        //Adiciona no carrinho
        cy.get('#add-to-cart-sauce-labs-backpack').click()

        //Volta para tela de produtos
        cy.get('[data-test="back-to-products"]').click()

        //Seleciona outro produto
        cy.get('#item_0_title_link').click()

        //Adiciona no carrinho
        cy.get('#add-to-cart-sauce-labs-bike-light').click()

        //Volta para tela de produtos
        cy.get('[data-test="back-to-products"]').click()

        //Seleciona outro produto
        cy.get('#item_1_title_link').click()

        //Adiciona no carrinho
        cy.get('#add-to-cart-sauce-labs-bolt-t-shirt').click()

        //Acessa o carrinho
        cy.get('.shopping_cart_link').click()     
    })


    it('Filtrar produtos', function() {

        //Acessa a pagina
        cy.visit("https://www.saucedemo.com/")

        //Informa usuario, senha e clica em login        
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()

        //Seleciona filtro por Nome (Z to A)
        cy.get('[data-test="product_sort_container"]').select('za')

        //Seleciona filtro por Preco (low to high)
        cy.get('[data-test="product_sort_container"]').select('lohi')

        //Seleciona filtro por Preco (high to low)
        cy.get('[data-test="product_sort_container"]').select('hilo')

        //Seleciona filtro por Nome (A to Z)
        cy.get('[data-test="product_sort_container"]').select('az')        
    })    
    

    it('Filtrar produtos - Preco (low to high)', function() {

        //Acessa a pagina
        cy.visit("https://www.saucedemo.com/")

        //Informa usuario, senha e clica em login        
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()

        //Seleciona filtro por Preco (low to high)
        cy.get('[data-test="product_sort_container"]').select('lohi')
    })    

    it('Filtrar produtos - Preco (high to low)', function() {

        //Acessa a pagina
        cy.visit("https://www.saucedemo.com/")

        //Informa usuario, senha e clica em login        
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()

        //Seleciona filtro por Preco (high to low)
        cy.get('[data-test="product_sort_container"]').select('hilo')
    })    

    
    it('Filtrar produtos - Preco (high to low)', function() {

        //Acessa a pagina
        cy.visit("https://www.saucedemo.com/")

        //Informa usuario, senha e clica em login        
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()

        //Seleciona filtro por Nome (A to Z)
        cy.get('[data-test="product_sort_container"]').select('az')
    })    


});