var pollster = require('./pollster');
var assert = require('assert');

pollster.chart('2012-general-election-romney-vs-obama', function(resp){
  assert.equal(resp.state, 'US', 'General election chart test failed');
});

pollster.polls({}, function(resp) {
  assert.equal(resp.length, 10, 'Poll page size test failed');
});

pollster.chart('invalid-slug', function(resp) {
  assert.ok(resp.errors, 'Invald slug test failed');
});

pollster.chart('2012-iowa-gop-primary', function(resp) {
  assert.ok(Array.isArray(resp.estimates_by_date), 'Estimate by date test failed');
});
