"use strict";

app.service("NewContactService", function($http, FIREBASE_CONFIG){

	const getContacts = (userUid) => {
		let contacts = [];
		return $http.get(`${FIREBASE_CONFIG.databaseURL}/contacts.json?orderBy="uid"&equalTo="${userUid}"`);
	};

	const postNewContact = (newContact) => {
		return $http.post(`${FIREBASE_CONFIG.databaseURL}/contacts.json`, JSON.stringify(newContact));
	};

	const deleteContact = (contactId) => {
		return $http.delete(`${FIREBASE_CONFIG.databaseURL}/contacts/${contactId}.json`);
	};


	return {getContacts, postNewContact, deleteContact};
});

