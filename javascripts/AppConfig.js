'use strict';

app.run(function(FIREBASE_CONFIG){
  firebase.initializeApp(FIREBASE_CONFIG);
});

app.config(function($routeProvider){
  $routeProvider
    .when("/contactsfavorites", {
      templateUrl: 'partials/contactsfavorites.html',
      controller: 'ContactsFavoritesCtrl'
    })
    .when("/contactsnew", {
      templateUrl: 'partials/contactsnew.html',
      controller: 'ContactsNewCtrl'
    })
    .when("/contactsview", {
      templateUrl: 'partials/contactsview.html',
      controller: 'ContactsViewCtrl'
    })
    .when("/login", {
      templateUrl: 'partials/login.html',
      controller: 'LoginCtrl'
    })
    .otherwise('/login');
});