angular.module("AppliForum.DetailEntreprise", [])
    .controller('DetailEntrepriseCtrl', function($scope, Entreprise, $stateParams, $sce) {
        $scope.entreprise = Entreprise.getEntreprise($stateParams.Id);

    })
    .filter("sanitize", ['$sce', function($sce) {
        return function(htmlCode) {
            return $sce.trustAsHtml(htmlCode);
        }
    }]);
