# node-pollster

A small Node.js wrapper for the [Huffington Post Pollster API](http://elections.huffingtonpost.com/pollster/api).

## Installation

npm install pollster

## Getting Started

    var pollster = require('pollster')

See the current estimate of the president's job approval    

    pollster.charts({topic: 'obama-job-approval'}, function(result){
      console.log(result[0].estimates);
    });

List charts about 2012 Senate races

    pollster.charts({topic: '2012-senate'}, function(result){
      console.log(result);
    });

## License
See [LICENSE](https://github.com/caseypt/node-pollster/blob/master/LICENSE).

The Huffington Post Pollster API is licensed under the [Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License.](http://creativecommons.org/licenses/by-nc-sa/3.0/deed.en_US). See [this page](http://elections.huffingtonpost.com/pollster/api) for additional license and useage information.

Not affiliated with the Huffington Post.