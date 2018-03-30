var SerialPort = require('serialport');
var parsers = SerialPort.parsers;
var parser = new parsers.Readline({
    delimiter: '\r\n'
});

var port = new SerialPort('/dev/ttyACM0', {
    baudrate: 9600
});

port.pipe(parser);

port.on('open', function() {
    console.log('testing open');
})

port.on('error', function(err) {
    console.log('open error ::::::::: ', err);
})

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
        function get_radon() {
            port.on('data', function(data) {
                $scope.radon = data;
                console.log('get data :::::', data);
            });
        }
        //get door value

        //get fan status

        _this.init = function() {
            $interval(updateTime, 1000);
            $interval(get_radon, 1000);
            var defaultView = function() {
                console.debug("Ok, going to default view...");

            }
        };
        _this.init();
    }

    angular.module('radonapp')
        .controller('radonCtrl', radonCtrl);

}(window.angular));