//var myApp = angular.module('gotApp', ["ngRoute"]);

myApp.controller('bookCtrl', ['$http', 'apiService', '$routeParams', function($http, apiService, $routeParams) {
  var main = this;
  this.book = {};
  this.bookid = $routeParams.bookid;


  // get book
  this.getBookFucntion = function() {
    apiService.getBook(main.bookid).then(function successCallback(response) {
        //console.log(response.data);
        main.book = response.data;
        console.log(main.book);

      },
      function errorCallback(response) {
        alert("some error occurred. Check the console.");
        console.log(response);
      });
    return main.book;
  }; //function end
  main.getBookFucntion();

}]); // controller end