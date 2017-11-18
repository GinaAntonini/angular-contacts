'use strict';

app.run(function($location, $rootScope, FIREBASE_CONFIG, AuthService){
  firebase.initializeApp(FIREBASE_CONFIG);
});

app.config(function($routeProvider){
  $routeProvider
    .when("/contacts/favorites", {
      templateUrl: 'partials/favorites.html',
      controller: 'FavoritesCtrl',
    })
    .when("/contacts/new", {
      templateUrl: 'partials/new.html',
      controller: 'NewCtrl',
    })
    .when("/contacts/view", {
      templateUrl: 'partials/view.html',
      controller: 'ViewCtrl',
    })
    .when("/login", {
      templateUrl: 'partials/login.html',
      controller: 'LoginCtrl',
    })
    .otherwise('/login');
});