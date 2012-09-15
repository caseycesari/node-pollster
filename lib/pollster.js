exports.version = '0.0.1';

var request = require('request');

(function(pollster) {

  var config = {
    'API_SERVER' : 'elections.huffingtonpost.com',
    'API_BASE': '/pollster/api'
  };

  _buildRequestUrl = function(path, params) {
    var url = 'http://' + config.API_SERVER + config.API_BASE + '/' + path;

    return url;
  };

  _invoke = function(path, params, callback) {
    var url = _buildRequestUrl(path, params);

    request(url, {qs: params}, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        callback(JSON.parse(body));
      } else {
        console.log(body);
      }
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
    _invoke('polls/', params, function(resp){
      callback(resp);
    });
  };

}(typeof module == 'object' ? module.exports : window.pollster = {}));