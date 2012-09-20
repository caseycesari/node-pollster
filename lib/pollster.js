exports.version = '0.0.2';

var request = require('request');

(function(pollster) {

  var config = {
    'API_SERVER' : 'elections.huffingtonpost.com',
    'API_BASE': '/pollster/api'
  };

  _buildRequestUrl = function(path) {
    var url = 'http://' + config.API_SERVER + config.API_BASE + '/' + path;

    return url;
  };

  _invoke = function(path, params, callback) {
    var url = _buildRequestUrl(path);

    request(url, {qs: params}, function (error, response, body) {
      callback(JSON.parse(body));
    });
  };

  pollster.charts = function(params, callback) {
    _invoke('charts', params, function(resp){
      callback(resp);
    });
  };

  pollster.chart = function(slug, callback) {
    _invoke('charts/' + slug, {}, function(resp){
      callback(resp);
    });
  };

  pollster.polls = function(params, callback) {
    _invoke('polls', params, function(resp){
      callback(resp);
    });
  };

}(typeof module == 'object' ? module.exports : window.pollster = {}));