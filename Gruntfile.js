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
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['sass', 'cssmin']);

};