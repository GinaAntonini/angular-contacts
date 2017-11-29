"use strict";

app.controller("ViewCtrl", function($rootScope, $location, $scope, NewContactService){
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
		NewContactService.updateContact(contact.id, contact);
	};

	$scope.editContact = (contactId) => {
		$location.path(`/contacts/edit/${contactId}`);
	};

	$scope.viewDetail = (contactId) => {
		$location.path(`/contacts/detail/${contactId}`);
	};

	$scope.addPaw = (contact) => {
	
	}
	
});
