(function() {
    'use strict';

    //define the component and controller we loaded in our test
    angular.module('components.profile', [])
        .controller('ProfileController', function(resolvedUser) {
            var vm = this;
            vm.user = resolvedUser;
        })
        .config(function($stateProvider) {
            $stateProvider
                .state('profile', {
                    url: '/user/:id',
                    templateUrl: 'components/profile/profile.html',
                    controller: 'ProfileController as pc',
                    resolve: {
                      //add resolvedUser with a call to Users using $stateParams
                      resolvedUser: function(Users, $stateParams) {
                        return Users.findById($stateParams.id);
                      }
                    }
                });
        });
})();
