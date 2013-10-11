'use strict';


// Declare app level module which depends on filters, and services
angular.module('eadViewer', ['eadViewer.filters', 'eadViewer.services', 'eadViewer.directives']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/browse', {templateUrl: 'partials/browse.html', controller: 'BrowseCtrl'});
    $routeProvider.otherwise({redirectTo: '/browse'});
  }]);
