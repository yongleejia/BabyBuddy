angular.module('babyBuddyApp')

    .controller('profileMenu', function ($scope, $state) {
        var db = new PouchDB('accounts');
        $scope.selectedName = "Not selected";
        $scope.available = "Not available";
        $scope.BabyNames = new Array();
        $scope.BabyImg = new Array();

        db.allDocs({
            include_docs: true,
            attachments: true
        }).then(function (result) {
            for(var i = 0; i<result.rows.length; i++)
            {
                var tempName = JSON.stringify(result.rows[i].doc.name);
                tempName = tempName.replace(/["]/g,'');

                var tempImageURL = JSON.stringify(result.rows[i].doc.imgUrl);
                tempImageURL = tempImageURL.replace(/["]/g,'');

                if($scope.BabyNames.indexOf(tempName) == -1) {
                    $scope.BabyNames[i] = tempName;
                    $scope.BabyImg[i] = tempImageURL;
                }
            }

            if(result.total_rows!= 0) {
                $scope.selectedName = $scope.BabyNames[0];
                $scope.selected_image_url = $scope.BabyImg[0];
                $scope.available = "available";
            }
        }).catch(function (err) {
            console.log(err);
        });

        $scope.selectName= function(name, image_url){
            $scope.selected_image_url = image_url;
            $scope.selectedName = name;
        }

        $scope.goAccountInformation= function(){
            $state.go('accountInformation', {}, {reload: true});
        }
    });
