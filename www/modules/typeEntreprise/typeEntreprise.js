angular.module("AppliForum.TypeEntreprise", [])
    .controller('TypeEntrepriseCtrl', function($scope) {
        $scope.startUp = "";
        $scope.esn = true;
        $scope.esi = false;

        $scope.toggleGroup = function(group) {
            if ($scope.isGroupShown(group)) {
                $scope.shownGroup = null;
            } else {
                $scope.shownGroup = group;
            }
        };
        $scope.isGroupShown = function(group) {
            return $scope.shownGroup === group;
        };

    })
