"use strict";

app.service("NewContactService", function($http, $q, FIREBASE_CONFIG){

	const getContactsFromFirebase = (userUid) => {
		let contacts = [];
    return $q((resolve, reject) => {
      $http.get(`${FIREBASE_CONFIG.databaseURL}/contacts.json?orderBy="uid"&equalTo="${userUid}"`).then((results) => {
        let fbContacts = results.data;
        Object.keys(fbContacts).forEach((key) => {
          fbContacts[key].id = key;
            contacts.push(fbContacts[key]);
        });
        resolve(contacts);
      }).catch((err) => {
        reject(err);
      });
    });
  };


	const postNewContact = (newContact) => {
		return $http.post(`${FIREBASE_CONFIG.databaseURL}/contacts.json`, JSON.stringify(newContact));
	};

	const deleteContact = (contactId) => {
		return $http.delete(`${FIREBASE_CONFIG.databaseURL}/contacts/${contactId}.json`);
	};


	return {getContactsFromFirebase, postNewContact, deleteContact};
});

