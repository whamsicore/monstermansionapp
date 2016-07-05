angular.module('monster_controllers')
.controller('home_controller', 
[       '$scope', '$state', 'CommonData',
function($scope,   $state,   CommonData) {
  ////////////
  // CONFIG //
  ////////////
  var config = {
    options: {
      players: [4,5,6,7,8],
      themes: ['Escape!', 'Vampyre Coven', 'Zombiepocalypse', 'Tomb Of The Pharoah', 'Alien Spaceship'],
    },
  }
  //////////
  // INIT //
  //////////
  $scope.current_state = $state.current;
  
  $scope.options = {
    players: {
      values: config.options.players.map(function(num) {
        return {
          value: num,
          label: num + ' Players'
        }
      }),
    },
    themes: {
      values: config.options.themes.map(function(theme_value) {
        return {
          value: theme_value, 
          label: 'Theme: ' + theme_value
        }
      }),
    }
  }
  
  $scope.eventToggle = {
    status: false
  }
  
  ////////////
  // EVENTS //
  ////////////
  $scope.onClickStart = function($event) {
    console.log('@onClickStart');

    CommonData.setData('player_selection', $scope.options.players.selection.value);
    CommonData.setData('theme_selection', $scope.options.themes.selection.value);
    $state.go('timer_view');
  }

  $scope.onClickEventToggle = function($event) {
    console.log('@onClickEventToggle');
    $scope.eventToggle.status = !$scope.eventToggle.status;
  }

}]);