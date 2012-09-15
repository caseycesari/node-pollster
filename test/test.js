var pollster = require('../lib/pollster');

/*pollster.charts({'state': 'PA'}, function(result){
  console.log(result);
});

pollster.chart('2012-pennsylvania-gop-primary', function(result){
  console.log(result);
});*/

pollster.polls({'state': 'PA', 'topic': '2012-house'}, function(result){
  console.log(result);
});