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
    console.log('test open !');
});

port.on('error', function(err) {
    console.log('open error ::::::: ', err);
});

port.on('data', function(data) {
    console.log('get data ::::::: ', data);
    process.exit();
});