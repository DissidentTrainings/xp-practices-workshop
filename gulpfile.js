var gulp = require('gulp');
var help = require('gulp-help')(gulp);
var args   = require('yargs').argv;
var markdown = require('gulp-markdown');
var cheerio = require('cheerio');
var Hogan = require('hogan');
var fs = require('fs');

gulp.task('default', 'Builds all the stuff', function () {

});

gulp.task('createpractice', 'Creates a practice by passing a c2 wiki url', function () {
    requestC2page(args.c2, function(res) {
      var templateVars = {
        c2id: args.c2,
        name: res
      };
      var templateStr = fs.readFileSync('./templates/wikipage.md', {encoding:'utf-8'});
      var template = Hogan.compile(templateStr);
      var output = template.render(templateVars);
      console.log(output);
      if (args.save) {
        fs.writeFileSync('./practices/'+args.c2+'.md', output);
      }
    });
});

// Print all of the news items on Hacker News
var requestC2page = function(name, cb) {
    var http = require('http');
    //The url we want is `www.nodejitsu.com:1337/`
    var options = {
      host: 'c2.com',
      path: '/cgi/wiki?'+name,
      //since we are listening on a custom port, we need to specify it by hand
      port: '80',
      //This is what changes the request to a POST request
      method: 'GET'
    };
    var str = '';
    var callback = function(response) {
      response.on('data', function (chunk) {
        str += chunk;
      });
      response.on('end', function () {
        if (str !== '') {
          $ = cheerio.load(str);
          $('title').filter(function() {
          var data = $(this).text();
            cb(data);
          });
        }
      });
    };

    var req = http.request(options, callback);
    req.write("hello world!");
    req.end();
};


