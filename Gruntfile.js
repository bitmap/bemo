module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        options: {
          style: 'expanded',
          cacheLocation: 'css/.sass-cahce'
        },
        files: {
          'bemo.css':'css/bemo.scss'
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
      html: {
        files: ['index.html']
      },
      js: {
        files: ['js/*.js']
        //tasks: ['jshint'] //todo
      },
      sass: {
        options: {
          livereload: false,
        },
        files: ['css/bemo.scss'],
        tasks: ['sass']
      },
      css: {
        files: ['bemo.css'],
        tasks: ['cssmin', 'csslint']
      },
    },
    connect: {
      port: {
        options: {
          port: 35729,
          base: ''
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-connect");

  grunt.registerTask('default', ['sass', 'cssmin']);
  grunt.registerTask("dev", [
    "connect", 
    "watch"
  ]);

};