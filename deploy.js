var ghpages = require('gh-pages');
 
ghpages.publish('build', {
  branch: 'master',
  repo: 'git@github.com:niyobe/niyobe.github.io.git',
}, function (err) {
  if (err)
    return console.log(err);
  else 
    return console.log('system: build and deploy success.');
});