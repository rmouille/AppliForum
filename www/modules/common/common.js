angular.module("AppliForum.Common", [])

.service('Entreprise', ["$http", function($http) {
    var entreprises = [{
        "id": "",
        "nom": "",
        "type": "",
        "description": "",
        "postes": [{
            "intitule": "",
            "type": "",
            "description": "",
            "localisation": ""
        }],
        "logo": "",
        "label": ""
    }];

    return {
        init: function() {
            $http.get("./json/entreprises.json").then(function(response) {
                angular.forEach(response.data, function(component, key) {
                    entreprises[key] = component;
                });
            }, function(error) {});
        },
        getList: function() {
            return entreprises;
        },
        getEntreprise: function(Id) {
            angular.forEach(entreprises, function(component, key) {
                if (component.id == Id) {
                    entreprise = component;
                }
            });
            return entreprise;
        }
    };
}]);
