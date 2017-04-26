//var myApp = angular.module('gotApp', ["ngRoute"]);

myApp.controller('characterCtrl', ['$http', 'apiService', '$routeParams', function($http, apiService, $routeParams) {
  var main = this;
  this.character = {};
  this.characterid = $routeParams.characterid;

  // get house
  this.getCharacterFucntion = function() {
    apiService.getCharacter(main.characterid).then(function successCallback(response) {
        //console.log(response.data);
        main.character = response.data;
        console.log(main.character);

      },
      function errorCallback(response) {
        alert("some error occurred. Check the console.");
        console.log(response);
      });
    return main.character;
  }; //function end
  main.getCharacterFucntion();

}]); // controller end