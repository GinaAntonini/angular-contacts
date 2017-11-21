"use strict";

app.controller("FavoritesCtrl", function($scope, $rootScope, NewContactService){
    const getFavorites = () => {
        NewContactService.getFavoritesFromFirebase($rootScope.uid).then((results) => {
            $scope.favorites = results;
        }).catch((error) => {
            console.log(error);
        });
    };

    $scope.deleteContactFromFirebase = (contactId) => {
		NewContactService.deleteContact(contactId).then((result) =>{
			getFavorites();
		}).catch((err) =>{
		console.log("error in deleteContactFromFirebase", err);
    });
    };
    
    $scope.changeFavorite = (contact) => {
		contact.favorite = !contact.favorite;
		delete contact.$$hashKey;
		NewContactService.updateContact(contact.id, contact).then(() => {
            getFavorites();
        }).catch((err) => {
            console.log("error in changeFavorites", err);
        });
    };
    getFavorites();
});



