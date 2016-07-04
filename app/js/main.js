

var monster_app = angular.module('monster_app', [
  'monster_controllers', 
  'ui.router',
  // 'ngDialog'
  // 'monster_controllers', 
]);

angular.module('monster_controllers', []);

monster_app.config(
[       '$stateProvider', '$urlRouterProvider', '$httpProvider',
function($stateProvider,   $urlRouterProvider,   $httpProvider  ){
  ///////////////////////
  // ANGULAR UI ROUTER //
  ///////////////////////
  $urlRouterProvider.otherwise("/home"); // default to return_selection $state
  
  // func: ui routing for SPA functionality
  $stateProvider
    .state( 'home_view', {
      url: '/home',
      templateUrl: '/partials/home',
      controller: 'home_controller'
    })
    .state('countdown_view', {
      url: '/countdown',
      templateUrl: '/partials/countdown',
      // controller: 'home_controller'
    })
}]);

monster_app.run(
[       '$rootScope',
function($rootScope) {
  console.log('@monster_app .run()');

}]);