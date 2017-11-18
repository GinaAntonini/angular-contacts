"use strict";

app.controller("ViewCtrl", function($rootScope, $scope, NewContactService){
		$scope.contact = [];
    		NewContactService.getContacts($rootScope.uid).then((results) => {
    		$scope.contact = results;
    	}).catch((err) => {
    	console.log("error in getContacts", err);
   	});
});

