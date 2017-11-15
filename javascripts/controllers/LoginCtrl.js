"use strict";

app.controller("LoginCtrl", function($rootScope, $scope, AuthService){
    $scope.authenticate = () => {
        AuthService.authenticateGoogle().then((result) => {
            $rootScope.uid = result.user.uid;
            console.log($rootScope);
            }).catch((err) => {
                console.log("error in authenticateGoogle", err);
            });
    };
});