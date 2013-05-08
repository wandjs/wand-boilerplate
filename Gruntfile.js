'use strict';

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

    handlebars: {
      compile: {
        options: {
          amd: true,
          processName: function(filename) {
            return filename.replace('app/templates/', '').replace('.hbs', '');
          }
        },
        files: {
          "app/templates/templates.js": "app/templates/**/*.hbs"
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
      },
      handlebars: {
        files: ['app/templates/**/*.hbs'],
        tasks: ['handlebars']
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
  grunt.loadNpmTasks('grunt-contrib-handlebars');

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'stylus', 'handlebars']);

  grunt.registerTask('serve', ['default', 'connect', 'watch']);
};
