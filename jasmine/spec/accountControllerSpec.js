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

    it("should have an add account function", function(){
        expect(scope.addAccount).toBeDefined();
    });
});