var app = angular.module('minhaApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/cadastroEndereço', {
            templateUrl: 'cadastroEndereço.html',
            controller: 'cadastroEndereçoController'
        })
        .when('/cadastroPagamento', {
            templateUrl: 'cadastroPagamento.html',
            controller: 'cadastroPagamentoController'
        })
        .otherwise({
            redirectTo: '/cadastroEndereço' // Redireciona para a rota padrão
        });
});

