angular.module('babyBuddyApp')

    .controller('viewAccount', function ($scope, $ionicPopup, $stateParams, $state) {

        var db = new PouchDB('accounts');

        if ($stateParams.name != null) {
            $scope.name = $stateParams.name;
        }

        db.allDocs({
            include_docs: true,
            attachments: true
        }).then(function (result) {
            for(var i = 0; i<result.rows.length; i++)
            {
                var tempName = JSON.stringify(result.rows[i].doc.name);
                tempName = tempName.replace(/["]/g,'');

                if(tempName == $scope.name)
                {
                    var tempId = JSON.stringify(result.rows[i].doc._id);
                    tempId = tempId.replace(/["]/g,'');

                    var tempGender = JSON.stringify(result.rows[i].doc.gender);
                    tempGender = tempGender.replace(/["]/g,'');

                    var tempDOB = JSON.stringify(result.rows[i].doc.DOB);
                    tempDOB = tempDOB.replace(/["]/g,'');
                    tempDOB = new Date(tempDOB);

                    var tempLength = JSON.stringify(result.rows[i].doc.length);
                    tempLength = tempLength.replace(/["]/g,'');

                    var tempWeight = JSON.stringify(result.rows[i].doc.weight);
                    tempWeight = tempWeight.replace(/["]/g,'');

                    var tempRev = JSON.stringify(result.rows[i].doc._rev);
                    tempRev = tempRev.replace(/["]/g,'');

                    $scope.id = tempId;
                    $scope.gender = tempGender;
                    $scope.DOB = tempDOB;
                    $scope.length = tempLength;
                    $scope.weight = tempWeight;
                    $scope.rev = tempRev;

                    $scope.account = {id: $scope.id, name: $scope.name, gender:$scope.gender, dob:$scope.DOB, length:$scope.length, weight:$scope.weight, rev:$scope.rev, allowEdit:false};
                }
            }
        }).catch(function (err) {
            console.log(err);
        });

        $scope.toggleEdit= function(){
            if($scope.account.allowEdit == true)
                $scope.account.allowEdit = false;
            else
                $scope.account.allowEdit = true;
        }

        $scope.editAccount= function(){
            if ($scope.account != null && $scope.account.name != null && $scope.account.gender != null && $scope.account.dob != null && $scope.account.length != null && $scope.account.weight != null)
            {
                var doc = {
                    "_id": $scope.id,
                    "name": $scope.account.name,
                    "gender": $scope.account.gender,
                    "DOB": $scope.account.dob,
                    "length": $scope.account.length,
                    "weight": $scope.account.weight
                };
                var confirmPopup = $ionicPopup.confirm({
                    title: 'Edit Account',
                    template: 'Are you sure you want to edit \'' + $scope.name + '\' account?'
                });
                confirmPopup.then(function(res) {
                    if(res) {
                        try {
                            db.put(doc, $scope.account.rev);
                            $state.go('accountInformation', {}, {reload: true});
                        }
                        catch(err) {
                            console.log(err);
                        }
                    } else {
                        console.log('You are not sure');
                    }
                });
            }
            else
            {
                var alertPopup = $ionicPopup.alert({
                    title: 'Error',
                    template: 'Please fill up all fields!'
                });
            }
        }


        $scope.deleteAccount= function(){
                var confirmPopup = $ionicPopup.confirm({
                    title: 'Delete Account',
                    template: 'Are you sure you want to delete \'' + $scope.name + '\' account?'
                });
                confirmPopup.then(function(res) {
                    if(res) {
                        try {
                            db.remove($scope.id, $scope.rev);
                            $state.go('accountInformation', {}, {reload: true});
                        }
                        catch(err) {
                            console.log(err);
                        }
                    } else {
                        console.log('You are not sure');
                    }
                });
        }
    });
