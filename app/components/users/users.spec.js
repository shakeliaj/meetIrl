describe('UsersController', function() {
    var $controller, UsersController;

    // Load ui.router and our components.users module which we'll create next
    beforeEach(angular.mock.module('ui.router'));
    beforeEach(angular.mock.module('components.users'));


    beforeEach(inject(function(_$controller_) {
        $controller = _$controller_;
        UsersController = $controller('UsersController', {});
    }));

    //verify our controller exists
    it('should be defined', function() {
        expect(UsersController).toBeDefined();
    });
});
