// INITILIZE DIRECTIVE
// ============================================================
angular.module("app").directive('cardDir', function() {
  return {
    restrict: 'E',
    templateUrl: './app/directives/card/cardTmpl.html',
    controller: 'cardCtrl',
    scope: {
      card: '=',
      flip: "&"
    },
    link: function (scope, element, attribute) {
      console.log(scope.card)
      element.on('click', function (event) {
        element.css('color', 'blue');
      })
    }
  };
});
