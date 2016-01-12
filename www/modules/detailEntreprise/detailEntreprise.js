angular.module("AppliForum.DetailEntreprise", [])
    .controller('DetailEntrepriseCtrl', function($scope, Entreprise, $stateParams, $sce) {
        $scope.entreprise = Entreprise.getEntreprise($stateParams.Id);

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
    .filter("sanitize", ['$sce', function($sce) {
        return function(htmlCode) {
            return $sce.trustAsHtml(htmlCode);
        }
    }]);
