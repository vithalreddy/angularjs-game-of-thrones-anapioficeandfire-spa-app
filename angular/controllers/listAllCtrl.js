//var myApp = angular.module('gotApp', ["ngRoute"]);

myApp.controller('listAllCtrl', ['$http', 'apiService', function($http, apiService) {
  var main = this;
  this.books = [];
  this.characters = [];
  this.houses = [];
  this.booksVisible = true;
  this.housesVisible = false;
  this.charactersVisible = false;


  this.apiPaginationLengthForCharacters = 50; //intentionally defined bigger value to futureproof
  this.apiPaginationLengthForHouses = 20; //intentionally defined bigger value  to futureproof

  this.ShowHideBooks = function() {
    main.booksVisible = main.booksVisible ? false : true;
    main.housesVisible = false;
    main.charactersVisible = false;
  };
  this.ShowHideHouses = function() {
    main.housesVisible = main.housesVisible ? false : true;
    main.booksVisible = false;
    main.charactersVisible = false;

  };
  this.ShowHideCharacters = function() {
    main.charactersVisible = main.charactersVisible ? false : true;
    main.booksVisible = false;
    main.housesVisible = false;

  };


  // get all books
  this.getBooksFucntion = function() {
    apiService.getBooks().then(function successCallback(response) {
        main.books.push.apply(main.books, response.data);
      },
      function errorCallback(response) {
        alert("some error occurred. Check the console.");
        console.log(response);
      });
    return main.books;

  }; //function end
  main.getBooksFucntion();
  // get all books end


  //get all houses
  this.getHousesFucntion = function() {
    for (var i = 1; i < main.apiPaginationLengthForHouses; i++) {
      apiService.getHouses([i]).then(function successCallback(response) {
          if (response.data.length > 0) {
            main.houses.push.apply(main.houses, response.data);
          }
        },
        function errorCallback(response) {
          alert("some error occurred. Check the console.");
          console.log(response);
        });
    } //end for loop
  }; //function end
  main.getHousesFucntion();
  //get all houses end


  //get all characters
  this.getCharactersFucntion = function() {
    for (var i = 1; i < main.apiPaginationLengthForCharacters; i++) {
      apiService.getCharacters([i]).then(function successCallback(response) {
          if (response.data.length > 0) {
            main.characters.push.apply(main.characters, response.data);
          }
        },
        function errorCallback(response) {
          alert("some error occurred. Check the console.");
          console.log(response);
        });
    } //end for loop
  }; //function end
  main.getCharactersFucntion();
  //get all characters end

  console.log(main.books);
  console.log(main.houses);
  console.log(main.characters);






}]); // controller end