angular.module("AppliForum.ListeEntreprise", [])
    .controller('ListeEntrepriseCtrl', function($scope, Entreprise) {
        Entreprise.init();
        $scope.entreprises = Entreprise.getList();

    })
