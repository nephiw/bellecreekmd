var Metalsmith = require('metalsmith');
var Handlebars = require('handlebars');

var collections = require('metalsmith-collections');
var layouts = require('metalsmith-layouts');
var markdown = require('metalsmith-markdown');
var less = require('metalsmith-less');
var babel = require('metalsmith-babel');
var permalinks = require('metalsmith-permalinks');
var debug = require('metalsmith-debug');
var copy = require('metalsmith-static');
var ignore = require('metalsmith-ignore');

Handlebars.registerHelper('link', function (path) {
  return '/' + path;
});

Metalsmith(__dirname)
  .source('./src')
  .destination('./public')
  .clean(true)
  .use(less())
  .use(babel({
    presets: ['es2015']
  }))
  .use(markdown())
  .use(permalinks({
    relative: false,
    pattern: 'minutes/:date',
    date: 'YYYYMM'
  }))
  .use(collections())
  .use(layouts({
    engine: 'handlebars'
  }))
  .use(copy({
    src: 'lib',
    dest: '.'
  }))
  .use(ignore('less/*'))
  .build(function (err) {
    if (err) throw err;
    else console.log('Complete!');
  });
