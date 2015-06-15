angular.module('babyBuddyApp')

    .controller('addAccount', function ($scope, $ionicPopup, $state) {
        $scope.account = {length: 0, weight:0};

        $scope.addAccount= function(account){
            var db = new PouchDB('accounts');
            db.allDocs({
                include_docs: true,
                attachments: true
            }).then(function (result) {
                if (account != null && account.name != null && account.gender != null && account.dob != null && account.length != 0 && account.weight != 0)
                {
                        var idTemp = parseInt(result.rows[result.rows.length-1].doc._id) + 1;
                        var doc = {
                            "_id": idTemp+"",
                            "name": account.name,
                            "gender": account.gender,
                            "DOB": account.dob,
                            "length": account.length,
                            "weight": account.weight
                        };
                        db.put(doc);
                        var alertPopup = $ionicPopup.alert({
                            title: 'Success',
                            template: account.name + ' added!'
                        });
                        $state.go('accountInformation', {}, {reload: true});
                }
                else
                {
                    var alertPopup = $ionicPopup.alert({
                        title: 'Error',
                        template: 'Please fill up all fields!'
                    });
                }
            }).catch(function (err) {
                console.log(err);
            });
        }
    });

var datePicker = angular.module('babyBuddyApp');

datePicker.directive('jqdatepicker', function () {
    return {
        restrict: 'A',
        require : 'ngModel',
        link : function (scope, element, attrs, ngModelCtrl) {
            $(function(){
                element.datepicker({
                    dateFormat:'dd/mm/yy',
                    onSelect:function (date) {
                        ngModelCtrl.$setViewValue(date);
                        scope.$apply();
                    }
                });
            });
        }
    };
});
