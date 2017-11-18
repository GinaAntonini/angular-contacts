"use strict";

app.controller("ViewCtrl", function($rootScope, $scope, NewContactService){
	const getContacts = () => {
		$scope.newContact = [];
    		NewContactService.getContactsFromFirebase($rootScope.uid).then((results) => {
    		$scope.contacts = results.data;
    	}).catch((err) => {
    	console.log("error in getContacts", err);
   	});
   };
   getContacts();
});
