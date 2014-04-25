module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        options: {
          style: 'expanded',
          cacheLocation: 'css/.sass-cache'
        },
        files: {
          'bemo.css':'css/bemo.scss',
        }
      },
      dev: {
        options: {
          style: 'expanded',
          cacheLocation: 'css/.sass-cache'
        },
        files: {
          'bemo-dev.css':'css/bemo.scss',
        }
      }
    },
    cssmin: {
      css: {
        src: 'bemo.css',
        dest: 'bemo.min.css'
      }
    },
    csslint: {
      lax: {
        options: {
          csslintrc: 'css/.csslintrc'
        },
        src: ['bemo.css']
      },
      strict: {
        src: ['bemo.css']
      }
    },
    watch: {
      options: {
        livereload: true
      },
      js: {
        files: ['js/*.js']
        //tasks: ['jshint'] //todo
      },
      sass: {
        options: {
          livereload: false,
        },
        files: ['css/**/*.scss'],
        tasks: ['sass:dev']
      },
      css: {
        files: ['bemo-dev.css']
      },
      csstests: {
        files: ['css/tests/*.htm'],
        tasks: ['bake:build']
      },
    },
    connect: {
      port: {
        options: {
          port: 35729,
          base: '',
          open: true
        }
      }
    },
    bake: {
      build: {
          files: {
              'tests/smoketest.htm': 'tests/css/components.htm'
          }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-bake');

  grunt.registerTask('default', ['sass:dist', 'cssmin', 'bake']);
  grunt.registerTask('dev', ['connect', 'watch']);

};
