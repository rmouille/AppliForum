angular.module("AppliForum.Common", [])

.service('Entreprise', ["$http", function($http) {
    var entreprises = [{
        "nom": "",
        "type": "",
        "description": "",
        "postes": [{
            "intitule": "",
            "type": "",
            "duree": ""
        }],
        "logo": ""
    }];

    return {
        init: function() {
            console.log("coucou0");
            $http.get("./json/entreprises.json").then(function(response) {
                angular.forEach(response.data, function(component, key) {
                    entreprises[key] = component;
                });
            }, function(error) {});
        },
        getList: function() {
            return entreprises;
        }



    };
}]);
