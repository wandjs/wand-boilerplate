'use strict';

// var Mocha = require('mocha');

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      main: {
        src: ['app/scripts/**/*.js']
      },
      options: {
        eqeqeq: true,
        immed: true,
        indent: 2,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        unused: 'vars',
        boss: true,
        eqnull: true,
        node: true,
        es5: true,
        globals: {
          define: true
        }
      }
    },

    stylus: {
      compile: {
        options: {
          compress: false
        },
        files: {
          'app/styles/main.css': 'app/styles/src/main.styl'
        }
      }
    },

    watch: {
      stylus: {
        files: ['app/styles/**/*.styl'],
        tasks: ['stylus']
      },
      jshint: {
        files: ['app/scripts/**/*.js'],
        tasks: ['jshint']
      }
    },

    connect: {
      main: {
        options: {
          base: 'app/'
        }
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-connect');

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'stylus']);

  grunt.registerTask('serve', ['default', 'connect', 'watch']);
};
