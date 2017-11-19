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

	$scope.changeFavorite = (contact) => {
		contact.favorite = !contact.favorite;
		delete contact.$$hashKey;
		console.log(contact);
		NewContactService.updateContact(contact.id, contact);
	};
});
