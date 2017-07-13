module.exports = function (grunt) {
    grunt.initConfig({
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: [
                    './public/libs/angular/angular.min.js',
                    './public/libs/angular-route/angular-route.min.js',
                    './public/libs/angular-animate/angular-animate.min.js',
                    './public/libs/angular-bootstrap/ui-bootstrap.min.js',
                    './public/libs/angular-bootstrap/ui-bootstrap-tpls.min.js',
                    './public/{app.modules,app}.js',
                    './public/{services,controllers,directive}/*.js'
                ],
                dest: './tmp/bundle.js'
            }
        },
        uglify: {
            build: {
                src: './tmp/bundle.js',
                dest: './public/bundle.min.js'
            }
        },
        clean: ['./tmp']
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-clean');


    // Default task
    grunt.registerTask('default', ['concat', 'uglify', 'clean']);
}