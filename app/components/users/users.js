(function() {
    'use strict';

    //define the component and controller we loaded in our test
    angular.module('components.users', [])
        .controller('UsersController', function(Users) {
            var vm = this;

            //call all() and set it to users
            vm.users = Users.all();
        })
        .config(function($stateProvider) {
            $stateProvider
                .state('users', {
                    url: '/users',
                    templateUrl: 'components/users/users.html',
                    controller: 'UsersController as uc'
                });
        });
})();
