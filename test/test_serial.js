var SerialPort = require('serialport');

const Readline = SerialPort.parsers.Readline;
const port = new SerialPort('/dev/ttyUSB0', {
    baudRate: 9600
});
const parser = port.pipe(new Readline({ delimiter: '\r\n' }));

port.pipe(parser);

parser.on('open', function() {
    console.log('test open !');
    parser.write("p", function(data) {
        if (data) {
            console.log('get p command ::::', data);
        }

    });

});

parser.on('error', function(err) {
    console.log('open error ::::::: ', err);
});
parser.write('p', function(data) {
    console.log('get p data type :::::', typeof(data));
    console.log('get p command ::::::::::::::::::::: ', data);
})
parser.on('data', function(data) {

    console.log('get data ::::::: ', data);
    process.exit();
});