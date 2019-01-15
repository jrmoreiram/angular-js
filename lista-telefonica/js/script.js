//Cria um modulo. 
angular.module("listaTelefonica", []);

//Localiza um modulo.
angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope, $filter) {
	$scope.app = "Lista Telefônica";

	$scope.contatos = [
		{nome:"Pedro", telefone:"99999999", data: new Date(), operadora: {nome: "Tim", codigo: 41, categoria: "Celular"}, cor: "Blue"},
		{nome:"Ana", telefone:"99999888", data: new Date(), operadora: {nome: "Vivo", codigo: 15, categoria: "Celular"}, cor: "Pink"},
		{nome:"Maria", telefone:"99999777", data: new Date(), operadora: {nome: "GVT", codigo: 25, categoria: "Fixo"}, cor: "Red"}
	];

	$scope.operadoras = [
		{nome:"Oi",	codigo: 14, categoria: "Fixo", preco: 2 },
		{nome:"Vivo", codigo: 15,	categoria: "Celular", preco: 1},
		{nome:"Tim", codigo: 41,	categoria: "Celular", preco: 3},
		{nome:"Claro", codigo: 21, categoria: "Celular", preco: 1},
		{nome:"GVT", codigo: 25,	categoria: "Fixo", preco: 2},
	];

	$scope.adicionarContato = function (contato) {
		$scope.contatos.push(angular.copy(contato));
		delete $scope.contato;
		$scope.contatoForm.$setPristine();
	};

	$scope.apagarContatos = function (contatos) {
		$scope.contatos = contatos.filter(function (contato){
			if (!contato.selecionado) { return contato }
		});
	};

	$scope.isContatoSelecionado = function (contatos) {
		return contatos.some(function (contato){
			return contato.selecionado;
		});
	};

	$scope.ordenarPor = function (campo) {
		$scope.criterioDeOrdenacao = campo;
	};

	$scope.classe = "selecionado";
});