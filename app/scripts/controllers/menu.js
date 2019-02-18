"use strict";

/**
 * @ngdoc function
 * @name udaciMealsApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the udaciMealsApp
 */
angular
  .module("udaciMealsApp")
  .controller("MenuCtrl", ["foodFinder", function(menuService) {
    var viewModel = this;
    menuService
    .getData()
    .then(data => viewModel = data;);
    this.id = "strawberry-pudding";
    this.name = "Strawberry Pudding";
    this.img = "strawberry-pudding.jpg";
    this.rating = 5;
  });
