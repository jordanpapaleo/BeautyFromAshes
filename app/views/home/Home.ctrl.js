'use strict';

BFA.controller('HomeCtrl', ['$scope',
    function($scope) {
        var self = this;

        this.init = function() {
            this.setScope();
            this.load();
        };

        this.load = function() {
            this.setScopeEvents();
        };

        this.setScope = function() {
        };

        this.setScopeEvents = function() {
        };

        this.init();
    }]);
