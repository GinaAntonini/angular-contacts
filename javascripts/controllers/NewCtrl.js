"use strict";

app.controller("NewCtrl", function($rootScope, $http, $location, $q, $scope, FIREBASE_CONFIG, NewContactService) {

    $scope.addNewContactinFirebase = () => {
    	$scope.newContact.uid = $rootScope.uid;
        NewContactService.postNewContact($scope.newContact).then((results) => {
        	console.log(results);
        	$scope.newContact = {};
                $location.url("/contacts/view");
        }).catch((error) => {
            console.log("error in addNewContactinFirebase", error);
        });
    };
});