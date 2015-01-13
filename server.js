var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var exec = require('child_process').exec;
var app = express();

app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/status', function(req, res) {
  exec('/share/pifi wlan0 -s', function(e, stdout) {
    res.status(200).json({ 'state': stdout.trim() });
  });
});

app.get('/networks', function(req, res) {
  exec('/share/pifi wlan0 -l', function(e, stdout) {
    var networks = stdout.trim().split(',').map(function(ssid) {
      return { ssid: ssid };
    });
    
    res.status(200).json(networks);
  });
});

app.post('/networks', function(req, res) {
  exec('/share/pifi wlan0 -w "' + req.body.ssid + '" "' + req.body.passphrase + '"', function() {
    res.status(200).end();
  });
});

app.post('/access-point', function(req, res) {
  exec('/share/pifi wlan0 -a "' + req.body.ssid + '" "' + req.body.passphrase + '"', function() {
    res.status(200).end();
  });
});

app.listen(80, function() {
  console.log('web server started ' + new Date().toISOString());
});

