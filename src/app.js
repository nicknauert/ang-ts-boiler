"use strict";
/// <reference path="./declarations/_fix.d.ts" />
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./components/index");
var app;
(function (app) {
    var Module = /** @class */ (function () {
        function Module(name, modules) {
            this.app = angular.module(name, modules);
        }
        Module.prototype.addController = function (name, controller) {
            this.app.controller(name, controller);
        };
        Module.prototype.addService = function (name, serviceFunc) {
            this.app.service(name, serviceFunc);
        };
        Module.prototype.addComponent = function (name, component) {
            this.app.component(name, component);
        };
        Module.prototype.config = function () {
            this.app.config(["$routeProvider", function ($routeProvider) {
                    // ROUTING
                    $routeProvider
                        .when('/', {
                        template: "<div><main-component></main-component></div>"
                    });
                }]);
        };
        Module.$inject = ["ngRoute"];
        return Module;
    }());
    app.Module = Module;
})(app || (app = {}));
var MyTestApp;
(function (MyTestApp) {
    var myApp = new app.Module('myApp', ["ngRoute"]);
    myApp.config();
    myApp.addComponent('mainComponent', new index_1.MainComponent);
})(MyTestApp || (MyTestApp = {}));
