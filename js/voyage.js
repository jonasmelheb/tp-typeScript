"use strict";
var Sejour = /** @class */ (function () {
    function Sejour(nom, prix) {
        this.nom = nom;
        this.prix = prix;
    }
    return Sejour;
}());
var SejourService = /** @class */ (function () {
    function SejourService() {
        this.sejours = [new Sejour("france", 300), new Sejour("Prague", 400)];
    }
    SejourService.prototype.findByName = function (nom) {
        this.sejours.forEach(function (sejour) {
            if (sejour.nom == nom) {
                console.log(sejour);
            }
        });
    };
    return SejourService;
}());
var sejourService = new SejourService();
sejourService.findByName("france");
