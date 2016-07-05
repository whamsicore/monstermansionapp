

var monster_app = angular.module('monster_app', [
  'monster_controllers', 
  'timer',
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
    .state('timer_view', {
      url: '/timer',
      templateUrl: '/partials/timer',
      controller: 'timer_controller'
    })
}]);

monster_app.run(
[       '$rootScope', '$state', 'CommonData',
function($rootScope,   $state,   CommonData) {
  
  $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
    $rootScope.current_state_name = toState.name;
    var player_count = CommonData.getData('player_selection'); 
    console.log('player_count=', player_count)
    
    if(toState.name === 'timer_view' && !player_count) {
      event.preventDefault();
      $state.go('home_view');
    }
    // console.log('to view = ', $rootScope.current_view);
  });
  // $rootScope.logo = {
  //   view: 'home'
  // }
}]);

//////////////////
// DEPENDENCIES //
//////////////////
require("./../style/main.scss"); 
require('./home_controller.js');
require('./timer_controller.js');
require('./common.js');