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

}]);

monster_app.run(
[       '$rootScope',
function($rootScope) {
  console.log('@monster_app .run()');

}]);