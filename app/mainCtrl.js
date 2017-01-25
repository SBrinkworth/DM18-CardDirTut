// INITILIZE CONTROLLER
// ============================================================
angular.module("app").controller("mainCtrl", function($scope) {

  // VARIABLES
  // ============================================================
  $scope.cards = [{
    num: 'A',
    suit: 'Hearts',
    flipped: false
  },
  {
    num: 'K',
    suit: 'Spades',
    flipped: false
  },
  {
    num: '4',
    suit: 'Clubs',
    flipped: false
  },
  {
    num: '7',
    suit: 'Diamonds',
    flipped: false
  }];

  $scope.flipCard = function(card) {
    card.flipped = !card.flipped;
  }

  // FUNCTIONS
  // ============================================================


});
