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
        unused: false,
        boss: true,
        eqnull: true,
        node: true,
        es5: true,
        globals: {
          define: true
        }
      }
    },

    less: {
      compile: {
        options: {
          compress: true
        },
        files: {
          'app/styles/main.css': 'app-src/styles/_html5-boilerplate.less'
        }
      }
    },

    handlebars: {
      compile: {
        options: {
          amd: true,
          processName: function(filename) {
            return filename.replace('app-src/templates/', '').replace('.hbs', '');
          }
        },
        files: {
          "app/templates/templates.js": "app-src/templates/**/*.hbs"
        }
      }
    },

    watch: {
      less: {
        files: ['app-src/styles/**/*.less'],
        tasks: ['less']
      },
      jshint: {
        files: ['app/scripts/**/*.js'],
        tasks: ['jshint']
      },
      handlebars: {
        files: ['app-src/templates/**/*.hbs'],
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
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-handlebars');

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'less', 'handlebars']);

  grunt.registerTask('serve', ['default', 'connect', 'watch']);
};
