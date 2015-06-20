angular.module('babyBuddyApp')

    .controller('calendar', function($scope, $ionicPopup){
        $scope.events = [
            {
                title: 'Vaccination Appointment',
                start: '2015-06-19'
            },
            {
                title: 'Baby Vaccination',
                start: '2015-06-01'
            }
        ];
        $scope.eventSources = [$scope.events];

        $scope.alertOnEventClick = function( date, jsEvent, view){
            var alertPopup = $ionicPopup.alert({
                title: 'Event',
                template: date.title + ' Event'
            });
        };

        $scope.alertOnDayClick = function(date, allDay, jsEvent, view){
            //console.log(date._d);
            //console.log(date.format());
            var alertPopup = $ionicPopup.alert({
                title: 'Date',
                template: 'You clicked on: ' + date.format()
            });
        };

        $scope.uiConfig = {
            calendar:{
                height: 'auto',
                editable: true,
                header:{
                    //month agendaWeek
                    left: 'title',
                    center: '',
                    right: 'prev,next'
                },
                dayClick: $scope.alertOnDayClick,
                eventClick: $scope.alertOnEventClick
            }
        };
    });
