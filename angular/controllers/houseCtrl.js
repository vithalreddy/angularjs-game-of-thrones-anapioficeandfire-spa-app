//var myApp = angular.module('gotApp', ["ngRoute"]);

myApp.controller('houseCtrl', ['$http', 'apiService', '$routeParams', function($http, apiService, $routeParams) {
  var main = this;
  this.house = {};
  this.houseid = $routeParams.houseid;

  // get house
  this.getHouseFucntion = function() {
    apiService.getHouse(main.houseid).then(function successCallback(response) {
        //console.log(response.data);
        main.house = response.data;
        console.log(main.house);

      },
      function errorCallback(response) {
        alert("some error occurred. Check the console.");
        console.log(response);
      });
    return main.house;
  }; //function end
  main.getHouseFucntion();

}]); // controller end