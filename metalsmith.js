var Metalsmith = require('metalsmith');
var Handlebars = require('handlebars');
var minimist = require('minimist');

var collections = require('metalsmith-collections');
var layouts = require('metalsmith-layouts');
var inplace = require('metalsmith-in-place');
var markdown = require('metalsmith-markdown');
var excerpts = require('metalsmith-excerpts');
var less = require('metalsmith-less');
var babel = require('metalsmith-babel');
var permalinks = require('metalsmith-permalinks');
var copy = require('metalsmith-static');
var ignore = require('metalsmith-ignore');
var watch = require('metalsmith-watch');
var serve = require('metalsmith-serve');
var debug = require('metalsmith-debug');

var gatoken = require('./uservars.json').gatoken;
var options = minimist(process.argv.slice(2));

Handlebars.registerHelper('link', function (path) {
  return '/' + path.replace('/index.html', '');
});

var ms = Metalsmith(__dirname)
  .source('./src')
  .destination('./public')
  .clean(true)
  .metadata({
    gatoken: gatoken
  })
  .use(less())
  .use(babel({
    presets: ['es2015']
  }))
  .use(markdown())
  .use(excerpts())
  .use(permalinks({
    relative: false,
    date: 'YYYYMM',
    linksets: [{
      match: { collection: 'minutes' },
      pattern: 'minutes/:date'
    },{
      match: { collection: 'notices' },
      pattern: 'notices/:title'
    }]
  }))
  .use(collections({
    minutes: {
      sortBy: 'date',
      reverse: true
    },
    notices: {
      sortBy: 'data',
      reverse: true
    }
  }))
  .use(layouts({
    engine: 'handlebars',
    partials: 'partials'
  }))
  .use(inplace({
    engine: 'handlebars'
  }))
  .use(copy({
    src: 'lib',
    dest: '.'
  }))
  .use(ignore('less/*'));

if (options.serve) {
  ms.use(watch({
    paths: {
      '${source}/**/*': true,
      'layouts/**/*': '**/*',
      'partials/**/*': '**/*',
      'lib/**/*': '**/*'
    }
  }));
  ms.use(serve());
}

ms.build(function (err) {
  if (err) throw err;
  else console.log('Complete!');
});
