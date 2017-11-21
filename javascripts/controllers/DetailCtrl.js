"use strict";

app.controller("DetailCtrl", function($location, $routeParams, $scope, $rootScope, NewContactService){
    $scope.contact = [];
    const getContact = () => {
        NewContactService.getSingleContact($routeParams.id).then((results) =>{
            $scope.contact = results.data;
            }).catch((err) =>{
            console.log("err in getSingleContact", err);
        });
    };
    getContact();
});
