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

  const getFavoritesFromFirebase = (userUid) => {
		let contacts = [];
    return $q((resolve, reject) => {
      $http.get(`${FIREBASE_CONFIG.databaseURL}/contacts.json?orderBy="uid"&equalTo="${userUid}"`).then((results) => {
        let fbContacts = results.data;
        Object.keys(fbContacts).forEach((key) => {
          if (fbContacts[key].favorite){
            fbContacts[key].id = key;
            contacts.push(fbContacts[key]);
          }
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
  
  const updateContact = (contactId, contact) => {
		return $http.put(`${FIREBASE_CONFIG.databaseURL}/contacts/${contactId}.json`, JSON.stringify(contact));
  };

  const getSingleContact = (contactId) => {
    return $http.get(`${FIREBASE_CONFIG.databaseURL}/contacts/${contactId}.json`);
  };

  const createContactObject = (contact) => {
    return {
      "firstName": contact.firstName,
      "lastName": contact.lastName,
      "nickname": contact.nickname,
      "streetAddress": contact.streetAddress,
      "city": contact.city,
      "state": contact.state,
      "zip": contact.zip,
      "phoneNumber": contact.phoneNumber,
      "email": contact.email,
      "birthday": contact.birthday,
      "favorite": contact.favorite,
      "uid": contact.uid,
      "hasPet": contact.hasPet
    };
  };


	return {getSingleContact, updateContact, getContactsFromFirebase, getFavoritesFromFirebase, postNewContact, deleteContact};
});

