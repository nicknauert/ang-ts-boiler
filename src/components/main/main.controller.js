"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MainCtrl = /** @class */ (function () {
    function MainCtrl($http, $scope, $filter) {
        var _this = this;
        this.$http = $http;
        this.$scope = $scope;
        this.$filter = $filter;
        this.$scope.$on("POST_SUBMITTED", function () {
            _this.getPostList();
        });
    }
    MainCtrl.prototype.$onInit = function () {
        this.getPostList();
    };
    MainCtrl.prototype.getPostList = function () {
        console.log("init lifecycle");
    };
    MainCtrl.inject = ["$scope", "$filter"];
    return MainCtrl;
}());
exports.MainCtrl = MainCtrl;
