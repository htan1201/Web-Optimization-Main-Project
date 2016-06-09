module.exports = function(grunt) {
    //1. where we tell grunt we plan to use this plug-in
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');


    //2. All configuration goes here
    grunt.initConfig({
        //3. Read the json file
        pkg: grunt.file.readJSON('package.json'),

        uglify: {
            build: {
                src:'js/perfmatters.js',
                dest: 'js/perfmatters.min.js'
            },

            build: {
                src: 'views/js/main.js',
                dest: 'views/js/main.min.js'
            }
        },

        cssmin: {
            build: {
                src: 'css/style.css',
                dest: 'css/style.min.css'
            },
            
            build: {
                src: 'views/css/bootstrap-grid.css',
                dest: 'views/css/bootstrap-grid.min.css'
            },

            build: {
                src: 'views/css/style.css',
                dest: 'views/css/style.min.css'
            }
        },
    });
    //4. Where we tell grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['uglify', 'cssmin']);
};