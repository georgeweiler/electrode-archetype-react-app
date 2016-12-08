var io = require('socket.io-client');
var socket = io.connect('http://localhost:2992/', {reconnect: true});
var chalk = require('chalk')

socket.on('connect', function (socket) {
    console.log(chalk.green('socket.io client has connected!'))
});
socket.on('disconnect', function (socket) {
    console.log(chalk.red('socket.io has disconnected!'));
});
socket.on('serverEvent', function (socket) {
    console.log('socket.io server event ---> recieved');
});

//test event emitter --> sent to webpack reporter socket.io server on port 4000
socket.emit('clientEvent', "client event message --> sent")

module.exports = function () {
  return function (config) {
    return config;
  };
};
