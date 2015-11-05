//JadenApp.js

//var app = angular.module('Jaden', ['ui.router']);
var app = angular.module('Jaden', ['ngRoute']);

//Services
//Jaden Chips Data
app.factory('chips',[function(){
	var j = {
		chips: [
					{title:"Settings", icon:'fa-cogs', data:[]},
					{title: 'Dinner Time', icon:'fa-cutlery', data: [{title:'Pasta'}, {title:"Steak"}]}, 
					{title: 'Social', icon:'fa-users', data:[]}, 
					{title:'Files', icon:'fa-folder-open', data:[]},  
					{title:"Ispy", icon:'fa-user-secret', data:[]}, 
					{title: 'World', icon:'fa-globe', data:[]}, 
					{title:"TEST", icon:'', data:[]}
				]
	}

	return j;
}])

//Controllers
//Main Controller
app.controller('MainCtrl', ['$scope', 'chips',
function($scope, chips){	
	$scope.footerOn = false;
	$scope.chips = chips.chips;
	
	$scope.FooterCtrl = function() {
		$scope.footerOn = !$scope.footerOn ;
	};

}]);
//Chips Controller
app.controller('ChipsCtrl', ['$scope', '$stateParams', 'chips',
	function($scope, $stateParams, chips){
		$scope.footerOn = false;
}]);
//Dinner Time Controller
app.controller('DinnerTimeCtrl', ['$scope', '$routeParams', 'chips',
	function($scope, $routeParams, chips){
		$scope.meals = chips.chips[$routeParams.id];
		
}]);


//Routing
/*app.config(['$stateProvider', '$urlRouterProvider', 
	function($stateProvider, $urlRouterProvider) {

		$stateProvider.state('home', { url: '/home', templateUrl: '/home.html', controller: 'MainCtrl'})
					.state('chips', {url: '/chips', templateUrl:'/chips.html', controller: 'ChipsCtrl'})
					.state('dinnertime', {url: '/dinnertime/{id}', templateUrl:'/dinnertime.html', controller: 'DinnerTimeCtrl'});
		$urlRouterProvider.otherwise('home');		
}]);*/

//Routing - with node
app.config(['$routeProvider',function($routeProvider, $locationProvider){
	$routeProvider.when('/',{ templateUrl:'pages/home.html', controller:'MainCtrl'})
				.when('/chips',{templateUrl:'pages/chips.html', controller: 'ChipsCtrl'})
				.when('/dinnertime/:id',{templateUrl:'pages/dinnertime.html', controller: 'DinnerTimeCtrl'});
				//.otherwise({ redirectTo: '/'});
}]);

