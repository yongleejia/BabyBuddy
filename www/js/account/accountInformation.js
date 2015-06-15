angular.module('babyBuddyApp')

    .controller('accountInformation', function ($scope, $state) {
        var db = new PouchDB('accounts');

        $scope.BabyNames = new Array();

        db.allDocs({
            include_docs: true,
            attachments: true
        }).then(function (result) {
            for(var i = 0; i<result.rows.length; i++)
            {
                var tempName = JSON.stringify(result.rows[i].doc.name);
                tempName = tempName.replace(/["]/g,'');

                if($scope.BabyNames.indexOf(tempName) == -1) {
                    $scope.BabyNames[i] = tempName;
                }
            }
        }).catch(function (err) {
            console.log(err);
        });

        $scope.goBack= function(){
            $state.go('profile-menu.tab.event', {}, {reload: true});
        }

        $scope.add= function(){
            $state.go('addAccount', {}, {reload: true});
        }
    });
