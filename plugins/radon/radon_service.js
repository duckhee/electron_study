var SerialPort = require('serialport');

var parsers = SerialPort.parsers;
var parser = new parsers.Readline({
    delimiter: '\r\n',

});

var port = new SerialPort('/dev/ttypACM0', {
    baudrate: 9600
});

port.pipe(parser);

port.on('open', function() {
    console.log('testing open !');
});

port.on('error', function(err) {
    console.log('error ::::::::: ', err);
});

(function() {
    'use strict';

    function SensorGet($scope, $interval) {

    }
    angular.module('radonapp').factory('RadonService', SensorGet);

})