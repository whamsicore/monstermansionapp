angular.module('monster_controllers')
.controller('timer_controller', 
[       '$scope', 'CommonData',
function($scope,   CommonData) {
  
  var player_count = CommonData.getData('player_selection'); 
  // var player_count = .01; // for testing
  $scope.timer_total = player_count * 60 * 10; // 10 minutes per player


}]);