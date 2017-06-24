(function () {
  'use strict';

  angular.module('bento.box.controller', ['bento.box.services'])

      .controller('bentoBoxController',
      ['serviceExample', '$scope', '$rootScope', '$log', '$timeout', BentoBoxController]);

  function BentoBoxController(serviceExample, $scope, $rootScope, $log, $timeout) {

    var self = this;

    var init = function() {
      self.aMockObject = serviceExample.getMockData();;
    };

    serviceExample.fakeGet().then(function(impossibleSuccess) {},
                                  function(inevitableFailure) {});

    $scope.$watch('someValue', function (newValue, oldValue, scope) {
      if (newValue) {
        $log.debug("'someValue' has been set!");
      }
    });

    init();
  }
})();
