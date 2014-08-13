module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
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
      csstests: {
        files: ['tests/css/*.htm'],
        tasks: ['bake:build']
      },
    },
    connect: {
      port: {
        options: {
          port: 35729,
          base: '',
          open: 'tests/smoketest.htm'
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
