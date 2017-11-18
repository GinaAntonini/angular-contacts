"use strict";

app.controller("ViewCtrl", function($rootScope, $scope, NewContactService){
	const getContacts = () => {
		$scope.newContact = [];
    		NewContactService.getContactsFromFirebase($rootScope.uid).then((results) => {
    		$scope.contacts = results;
    	}).catch((err) => {
    	console.log("error in getContacts", err);
   	});
   };
   getContacts();

	$scope.deleteContactFromFirebase = (contactId) => {
		NewContactService.deleteContact(contactId).then((result) =>{
			getContacts();
		}).catch((err) =>{
		console.log("error in deleteContactFromFirebase", err);
    });
	};
});
