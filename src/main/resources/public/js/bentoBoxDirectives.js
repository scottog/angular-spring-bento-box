(function () {
  'use strict';

  angular.module('bento.box.directives', [])

      .directive('someElementDirective', function () {
                   return {
                     restrict: 'E',
                     replace: true,
                     templateUrl: 'assets/html/dashboard/somePartial.html',
                     scope: false,
                     controller: 'someOtherController',
                     controllerAs: 'someOtherCont'
                   }
                 })

      .directive("fancyLinkedDirective", function () {
                   return {
                     restrict: 'EA',
                     scope: {
                       setFileData: "&"
                     },
                     link: function (scope, element, attrs) {
                       element.on('change', function () {
                         scope.$apply(function () {
                           var val = element[0].files[0];
                           scope.setFileData({value: val});
                         });
                       });
                     }
                   }
                 })
})();