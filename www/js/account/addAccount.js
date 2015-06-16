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
                        var idTemp;
                        if(result.total_rows!= 0) {
                            idTemp = parseInt(result.rows[result.rows.length - 1].doc._id) + 1;
                        }
                        else {
                            idTemp = 1;
                        }

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
