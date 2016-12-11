describe('Capitalize filter', function() {
  var capitalizeFilter;

  //load our filters.capitalize module
  beforeEach(angular.mock.module('filters.capitalize'));

  //inject the $filter service and create an instance of our capitalize filter
  beforeEach(inject(function(_$filter_) {
    capitalizeFilter = _$filter_('capitalize');
  }));

  it('should capitalize the first letter of a string', function() {
    expect(capitalizeFilter('blastoise')).toEqual('Blastoise');
  });
});
