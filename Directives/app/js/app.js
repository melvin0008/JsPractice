'use strict';


/* App Module */

var app = angular.module('app', [
  'ngRoute'
]);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/directivecontroller', {
        templateUrl: 'partials/view1.html',
      }).
      when('/directivedirective', {
        templateUrl: 'partials/view2.html',
      }).
      when('/isolatescope', {
        templateUrl: 'partials/view3.html',
      }).
      otherwise({
        redirectTo: '/directivecontroller'
      });
}]);