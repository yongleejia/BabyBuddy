// Baby Buddy App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'babyBuddyApp' is the name of this angular module (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'babyBuddyApp.services' is found in services.js
// 'babyBuddyApp.controllers' is found in controllers.js
//angular.module('babyBuddyApp', ['ionic', 'babyBuddyApp.controllers', 'babyBuddyApp.services'])
angular.module('babyBuddyApp', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs).
    // The reason we default this to hidden is that native apps don't usually show an accessory bar, at
    // least on iOS. It's a dead giveaway that an app is using a Web View. However, it's sometimes
    // useful especially with forms, though we would prefer giving the user a little more room
    // to interact with the app.
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // Set the statusbar to use white instead of dark colors.
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // Menus
  .state('profile-menu', {
    url : '/profile-menu',
    abstract: true,
    templateUrl : 'templates/common/profile-menu.html',
    controller: 'profileMenu',
    cache: false
  })

  // setup an abstract state for the tabs directive
  .state('profile-menu.tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/common/tabs.html'
  })

  .state('accountInformation', {
    url: "/accountInformation",
    templateUrl: "templates/account/accountInformation.html",
    controller: "accountInformation",
    cache: false
  })

  .state('addAccount', {
    url: "/addAccount",
    templateUrl: "templates/account/AddAccount.html",
    controller: "addAccount",
    cache: false
  })

  .state('viewAccount', {
    url: "/viewAccount/:name",
    templateUrl: "templates/account/viewAccount.html",
    controller: "viewAccount"
  })

  .state('profile-menu.tab.event', {
    url: '/event',
    views: {
      'tab-event': {
        templateUrl: 'templates/event/event.html'
      }
    }
  })

  .state('profile-menu.tab.calendar', {
    url: '/calendar',
    views: {
      'tab-calendar': {
        templateUrl: 'templates/common/calendar.html'
      }
    }
  })

  .state('profile-menu.tab.appointment', {
    url: '/appointment',
    views: {
      'tab-appointment': {
        templateUrl: 'templates/appointment/appointment.html'
      }
    }
  })

  .state('profile-menu.tab.vaccination', {
    url: '/vaccination',
    views: {
      'tab-vaccination': {
        templateUrl: 'templates/vaccination/vaccination.html'
      }
    }
  })

  .state('profile-menu.tab.more', {
    url: '/more',
    views: {
      'tab-more': {
        templateUrl: 'templates/common/more.html'
      }
    }
  })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/profile-menu/tab/event');

});
