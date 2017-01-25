// INITILIZE CONTROLLER
// ============================================================
angular.module("app").controller("cardCtrl", function($scope) {

  // VARIABLES
  // ============================================================
  $scope.flipped=false;
  $scope.suits = [];
  var num = $scope.card.num;
  var flag = false;
  if ($scope.card.num.match(/[KQJ]/)) {
    flag = true;
  } else if ($scope.card.num === 'A') {
    num = 1;
  }

  if (!flag) {
    for (var i = 0; i < num; i++) {
      $scope.suits.push($scope.card.suit);
    }
  }

  // FUNCTIONS
  // ============================================================


});
