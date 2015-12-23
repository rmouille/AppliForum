angular.module("AppliForum.ListeEntreprise", [])
    .controller('ListeEntrepriseCtrl', function($scope, Entreprise) {
        Entreprise.init();

        $scope.search = {
            text: ''
        };
        $scope.entreprises = Entreprise.getList();

        $scope.searchCompany = function(data) {
            if ((angular.lowercase(data.nom).indexOf(angular.lowercase($scope.search.text)) != -1) || (angular.lowercase(data.type).indexOf(angular.lowercase($scope.search.text)) != -1)) {
                return true;
            }
            return false;
        };

    });
