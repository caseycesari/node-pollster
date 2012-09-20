var request = require('request');

var API_SERVER = 'elections.huffingtonpost.com';
var API_BASE = '/pollster/api';

exports.version = '0.0.3';

// Gets lists of charts based on state and/or topic parameter
// No parameters gets all charts
exports.charts = function(params, callback) {
  invoke('charts', params, function(resp){
    callback(resp);
  });
};

// Get single chart based on slug
exports.chart = function(slug, callback) {
  invoke('charts/' + slug, {}, function(resp){
    callback(resp);
  });
};

// Gets list of charts based on parameters
// Polls are listed in pages of 10
exports.polls = function(params, callback) {
  invoke('polls', params, function(resp){
    callback(resp);
  });
};


// Helper functions

function buildRequestUrl(path) {
  var url = 'http://' + API_SERVER + API_BASE + '/' + path;

  return url;
}

function invoke(path, params, callback) {
  var url = buildRequestUrl(path);

  request(url, {qs: params}, function (error, response, body) {
    callback(JSON.parse(body));
  });
}
