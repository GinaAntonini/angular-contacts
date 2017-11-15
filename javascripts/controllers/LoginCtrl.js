"use strict";

app.controller("LoginCtrl", function($rootScope, $scope, AuthService){
    $scope.authenticate = () => {
        AuthService.authenticateGoogle().then((result) => {
            $rootScope.uid = result.user.uid;
            }).catch((err) => {
                console.log("error in authenticateGoogle", err);
            });
    };
});