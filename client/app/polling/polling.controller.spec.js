'use strict';

describe('Controller: PollingCtrl', function () {

  // load the controller's module
  beforeEach(module('workspaceApp'));

  var PollingCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PollingCtrl = $controller('PollingCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
