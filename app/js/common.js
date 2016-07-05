angular.module('monster_app')
.factory('CommonData', 
[       
function() {
  var data = {};
  
  return {
    getData : function(key) {
        return data[key];
    },
    setData : function(key, value) {
        data[key] = value;
        return data[key];
    }
  }; // return

}]);