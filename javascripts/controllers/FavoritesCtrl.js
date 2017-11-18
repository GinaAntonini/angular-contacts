"use strict";

app.controller("FavoritesCtrl", function($scope){
    $scope.starChange = (event, contact) => {
        if (event.favorite){
            contact.rating = event.favorite;
            let updatedContact = NewContactService.
        }
    }
});



