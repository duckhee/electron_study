(function(angular) {
    'use strict';

    function radonCtrl(
        $rootScope, $scope, $timeout, $interval) {
        //$rootScope, $scope, $timeout, $interval, tmhDynamicLocale, $translate) {
        var _this = this;
        //Update the time
        function updateTime() {
            $scope.date = new moment();
        }
        //get radon value

        //get door value

        //get fan status

        _this.init = function() {
            $interval(updateTime, 1000);
            var defaultView = function() {
                console.debug("Ok, going to default view...");

            }
        };
        _this.init();
    }

    angular.module('radonapp')
        .controller('radonCtrl', radonCtrl);

}(window.angular));