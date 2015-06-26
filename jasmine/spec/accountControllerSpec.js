describe('accountController', function(){

    var scope, controller;

    // load the controller's module
    beforeEach(module('babyBuddyApp'));

    beforeEach(inject(function (
        $rootScope,
        $controller,
        $ionicModal,
        $ionicPopup,
        $state,
        $jrCrop) {

        scope = $rootScope.$new();

        controller = $controller('addAccount', {
            $scope: scope, 
            $ionicModal: $ionicModal,
            $ionicPopup: $ionicPopup, 
            $state: $state, 
            $jrCrop: $jrCrop
        });
        
    }));

    // tests start here
    it("should have a scope variable defined", function() {
        expect(scope).toBeDefined();
    });

    it("should have an add account controller", function(){
        expect(scope.addAccount).toBeDefined();
    });

    it("should add an account", function(){
        var validAccount = 
        {
            "name": "Joanne Choo",
            "gender": "F",
            "dob": "24/06/2015",
            "length": "43",
            "weight": "3",
        };
        var valid = scope.addAccount(validAccount);
        expect(valid).toBeFalsy();
    });
});