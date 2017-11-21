"use strict";

app.controller("EditCtrl", function($location, $routeParams, $scope, $rootScope, NewContactService){
    $scope.contact = [];
    const getContact = () => {
        NewContactService.getSingleContact($routeParams.id).then((results) =>{
            $scope.contact = results.data;
            }).catch((err) =>{
            console.log("err in getSingleContact", err);
        });
    };
    getContact();

    $scope.updateContactInFirebase = (contact, contacts) => {
		NewContactService.updateContact($routeParams.id, contact).then(() => {
            $location.path("/contacts/view");
        }).catch((err) => {
            console.log("error in updateContactInFirebase", err);
        });
    };
});