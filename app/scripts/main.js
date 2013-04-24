require.config({
  // Map libraries and longer path names to shorter ones
  paths: {
    'text': '../components/requirejs-text/text',
    'jquery': '../components/jquery/jquery',
    'underscore': '../components/underscore/underscore',
    'backbone': '../components/backbone/backbone',
    'domReady': '../components/requirejs-domready/domReady',
    'handlebars': '../components/handlebars/handlebars'
  },

  packages: [
    {
      name: 'wand',
      location: '../components/wand'
    }
  ],

  // This helps wrap and capture the output from non-AMD files
  // Some will pollute the global scope but we clean them up in the boot module below
  shim: {
    'underscore': {
      exports: '_'
    },
    'backbone': {
      deps: ['underscore'],
      exports: 'Backbone'
    },
    'handlebars': {
      exports: 'Handlebars'
    }
  }
});

// This boot sequence front-loads all the libraries to ensure they've been added to the global
// window scope. We can then clean them up so they only exist in the requirejs scope.
require([
  'text',
  'jquery',
  'underscore',
  'domReady',
  'backbone'
],function(
  text,
  $,
  _,
  domReady,
  Backbone
) {
  // Remove libraries from global window object. They will remain inside the requirejs scope.
  $.noConflict(true);
  _.noConflict();
  // delete createjs;

  // Explicitly set the require-scoped version of jQuery that Backbone should use
  Backbone.$ = $;

  // Provides CORS support for IE, which has problems with it when using localhost
  $.support.cors = true;

  // The main module is loaded separately, this ensures the library dependencies above are all
  // loaded and run before we start resolving the app's dependencies
  
  require(['app'], function(app) {

    // domReady will only call the function passed to it once the DOM has fully loaded
    // Note that the main module returns a function to run
    // domReady(main);
    domReady(function(){
      app.start();
    });
  });


});