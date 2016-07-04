angular.module('monster_controllers')
.controller('home_controller', 
[       '$scope', 
function($scope) {
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
  $scope.options = {
    players: {
      values: config.options.players.map(function(num) {
        return num + ' Players';
      }),
      value: '4 Players'
    },
    themes: {
      values: config.options.themes.map(function(theme_value) {
        return 'Theme: ' + theme_value;
      }),
      value: 'Theme: Escape!'
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
  }

  $scope.onClickEventToggle = function($event) {
    console.log('@onClickEventToggle');
    $scope.eventToggle.status = !$scope.eventToggle.status;
  }

}]);