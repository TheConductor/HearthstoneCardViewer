(function() {
  var app = angular.module('cards-directive',[]);

  app.controller('hearthstoneCardController', function($scope, $http) {
    $http.get("https://raw.githubusercontent.com/pdyck/hearthstone-db/master/cards/all-cards.json")
    .success(function(response) {
      $scope.cards = response["cards"];
    }).error(function(){
      $scope.names = "failed to get file";
    });
  });

  app.directive("cardDescription", function() {
    return {
      restrict: "E",
      templateUrl: "card-table.html"
    };
  });
})();
