module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    emberTemplates: {
      compile: {
        options: {
          templateBasePath: /templates\//
        },
        files: {
          'templates/tmpls.js': ['templates/**/*.hbs']
        }
      }
    },
    watch: {
      emberTemplates: {
        files: ['templates/**/*.hbs'],
        tasks: ['emberTemplates']
      }
    }
  });
 
  grunt.loadNpmTasks('grunt-ember-templates');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['emberTemplates']);
};
