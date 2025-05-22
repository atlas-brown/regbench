"use strict";

module.exports = function(grunt) {

  grunt.initConfig({

    nodeunit: {
      options: {
        reporter: "default"
      },
      files: ["test/test-*.js"],
    },

    jshint: {
      options: {
        jshintrc: ".jshintrc"
      },
      gruntfile: {
        src: "Gruntfile.js"
      },
      lib: {
        src: ["lib/**/*.js"]
      },
      test: {
        src: ["test/**/*.js"]
      },
    }

  });

  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-contrib-nodeunit");

  grunt.registerTask("default", ["jshint", "nodeunit"]);

};
