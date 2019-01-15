//Cria um modulo. 
angular.module("helloWord", []);

//Localiza um modulo.
angular.module("helloWord").controller("helloWordCtrl", function ($scope) {
	$scope.message = "Hello Word!";
});
