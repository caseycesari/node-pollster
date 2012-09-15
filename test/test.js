var pollster = require('../lib/pollster');

pollster.charts({'state': 'PA'}, function(resp){
  console.log(resp);
});

pollster.chart('2012-pennsylvania-gop-primary', function(resp){
  console.log(resp);
});

pollster.polls({'state': 'PA', 'topic': '2012-house'}, function(resp){
  console.log(resp);
});

pollster.polls({chart:'us-health-bill'}, function(resp){
  console.log(resp.map(function(p) { return [p.pollster, p.method ]; }));
});