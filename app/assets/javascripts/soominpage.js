function MainController ($scope) {
  $scope.entries = [
    {name: "soomin"},
    {name: "charlie"}
    ];

  $scope.addEntry = function() {
    $scope.entries.push($scope.newEntry);
    $scope.newEntry = '';
  };

}