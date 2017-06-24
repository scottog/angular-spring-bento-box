(function () {
  'use strict';

  angular.module('bento.box.services', [])
      .service('serviceExample', ['$http', ServiceExample]);

  function ServiceExample($http) {

    var serviceObj = {};

    serviceObj.fakeGet = function (requestBody) {
      return $http.get('apiEndpoint', requestBody);
    };

    serviceObj.getMockData = function () {
      return {
        name: 'Some Name',
        data: [
          'Apple', 'Orange'
        ]
      }
    };

    return serviceObj;
  }
})();
