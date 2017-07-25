const vorpal = require('vorpal')();

vorpal
  .command('start', 'Begin the solve the cube!')
  .action(function(args, callback) {
    this.log('Hello man!');
    callback();
  });

vorpal
  .delimiter('black-magic-cube$')
  .show();