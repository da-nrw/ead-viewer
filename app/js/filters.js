'use strict';

/* Filters */

angular.module('eadViewer.filters', []).
  filter('interpolate', ['version', function(version) {
    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    }
  }]).
  filter('uriEncode', function() {
    return function(text) {
    	return encodeURIComponent(text);
    }
  });
