describe('Users factory', function() {
    var Users;
    // The array of users our factory will provide us
    var userList = [{
        id: '1',
        name: 'Jane',
        role: 'Designer',
        location: 'New York',
        twitter: 'gijane'
    }, {
        id: '2',
        name: 'Bob',
        role: 'Developer',
        location: 'New York',
        twitter: 'billybob'
    }, {
        id: '3',
        name: 'Jim',
        role: 'Developer',
        location: 'Chicago',
        twitter: 'jimbo'
    }, {
        id: '4',
        name: 'Bill',
        role: 'Designer',
        location: 'LA',
        twitter: 'dabill'
    }];

    var singleUser = {
        id: '2',
        name: 'Bob',
        role: 'Developer',
        location: 'New York',
        twitter: 'billybob'
    };
    //before each test load our api.users module
    beforeEach(angular.mock.module('api.users'));

    //before each test set our injected Users factory (_Users_) to our local Users variable
    beforeEach(inject(function(_Users_) {
        Users = _Users_;
    }));

    //a simple test to verify the Users factory exists
    it('should exist', function() {
        expect(Users).toBeDefined();
    });

    //a set of tests for our Users.all() method
    describe('.all()', function() {
        //a simple test to verify the method all exists
        it('should exist', function() {
            expect(Users.all).toBeDefined();
        });

        //a test to verify that calling all() returns the array of users we hard-coded above
        it('should return a hard-coded list of users', function() {
            expect(Users.all()).toEqual(userList);
        });
    });

    //a set of tests for our Users.findById() method
    describe('.findById()', function() {
        //a simple test to verify the method findById exists
        it('should exist', function() {
            expect(Users.findById).toBeDefined();
        });

        //a test to verify that calling findById() with an id returns a single user
        it('should return one user object if it exists', function() {
            expect(Users.findById('2')).toEqual(singleUser);
        });

        //a test to verify that calling findById() with an id that doesn't exist returns undefined
        it('should return undefined if the user cannot be found', function() {
          expect(Users.findById('ABC')).not.toBeDefined();
        });
    });
});
