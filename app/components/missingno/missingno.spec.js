describe('components.missingno', function() {
  var $controller, MissingnoController;

  //load ui.router and our components.missingno module
  beforeEach(angular.mock.module('ui.router'));
  beforeEach(angular.mock.module('components.missingno'));

  //inject the $controller service to create instances of the controller
  beforeEach(inject(function(_$controller_) {
    $controller = _$controller_;
    MissingnoController = $controller('MissingnoController', {});
  }));

  //verify our controller exists
  it('should be defined', function() {
    expect(MissingnoController).toBeDefined();
  });
});
