(function() {
  'use strict';

  angular.module('bento.box.app', [
      //'ngRoute', //Vanilla
      //'ui-router', //Chocolate
    'ngResource', //Used for RESTful service binding.
    'bento.box.controller',
    'bento.box.directives',
    'bento.box.services'
  ])

      .config(function ($httpProvider
                        // These are popular and you might use them shortly!
                        //, $routeProvider
                        //, $stateProvider
                        //, $urlRouterProvider
              ) {

              })

      .constant('version', '0.1.0');
})();