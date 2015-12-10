angular.module("AppliForum.ListeEntreprise", [])
    .controller('ListeEntrepriseCtrl', function($scope, Entreprise) {
        $scope.t = "testouilles";
        Entreprise.init();
        $scope.entreprises = Entreprise.getList();

    })
