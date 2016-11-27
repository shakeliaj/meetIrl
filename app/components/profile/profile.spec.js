describe('components.profile', function() {
    var $controller, PokemonFactory, $q, $httpBackend;
    var API = 'http://pokeapi.co/api/v2/pokemon/';

    var RESPONSE_SUCCESS = {
      'id': 58,
      'name': 'growlithe',
      'sprites': {
        'front_default': 'http://pokeapi.co/media/sprites/pokemon/58.png'
      },
      'types': [{
        'type': { 'name': 'fire'}
      }]
    };


    beforeEach(angular.mock.module('ui.router'));
    beforeEach(angular.mock.module('api.pokemon'));
    beforeEach(angular.mock.module('components.profile'));

    //inject the $controller service
    beforeEach(inject(function(_$controller_, _Pokemon_, _$q_, _$httpBackend_) {
        $controller = _$controller_;
        PokemonFactory = _Pokemon_;
        $q = _$q_;
        $httpBackend = _$httpBackend_;
    }));

    describe('ProfileController', function() {
        var ProfileController, singleUser;

        beforeEach(function() {
            //define single user and add resolvedUser as a dependency
            singleUser = {
                id: '2',
                name: 'Bob',
                role: 'Developer',
                location: 'New York',
                twitter: 'billybob',
                pokemon: {
                    name: 'growlithe'
                }
            };
            //create an instance of our controller
            ProfileController = $controller('ProfileController', {
                resolvedUser: singleUser
            });
        });

        //verify our controller exists
        it('should be defined', function() {
            expect(ProfileController).toBeDefined();
        });
    });
    describe('Profile Controller with a valid resolved user', function() {
        var ProfileController, singleUser;

        beforeEach(function() {
            //mock a valid user
            singleUser = {
                id: '2',
                name: 'Bob',
                role: 'Developer',
                location: 'New York',
                twitter: 'billybob',
                pokemon: {
                    name: 'growlithe'
                }
            };

            spyOn(PokemonFactory, 'findByName').and.callThrough();

            //add the valid user as our resolved dependency
            ProfileController = $controller('ProfileController', {
                resolvedUser: singleUser,
                Pokemon: PokemonFactory
            });
        });

        it('should set the view model user object to the resolvedUser', function() {
            expect(ProfileController.user).toEqual(singleUser);
        });

        //it should call pokemon.findbyname and return a pokemon object test
        
    });
});
