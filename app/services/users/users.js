(function() {
    'use strict';

    //creating the module and factory we referenced in the beforeEach block in our test file
    angular.module('api.users', [])
        .factory('Users', function() {
            var Users = {};
            // The array of users our factory will provide us
            var userList = [{
                id: '1',
                name: 'Jane',
                role: 'Designer',
                location: 'New York',
                twitter: 'gijane',
                pokemon: { name: 'blastoise'}
            }, {
                id: '2',
                name: 'Bob',
                role: 'Developer',
                location: 'New York',
                twitter: 'billybob',
                pokemon: { name: 'growlithe'}
            }, {
                id: '3',
                name: 'Jim',
                role: 'Developer',
                location: 'Chicago',
                twitter: 'jimbo',
                pokemon: { name: 'hitmonchan'}
            }, {
                id: '4',
                name: 'Bill',
                role: 'Designer',
                location: 'LA',
                twitter: 'dabill',
                pokemon: { name: 'barney'} //invalid pokemon
            }];
            //Users.method = function() {};
            Users.all = function() {
                //return the array of users
                return userList;
            };

            Users.findById = function(id) {
                return userList.find(function(user) {
                    return user.id === id;
                });
            };

            return Users;
        });
})();
